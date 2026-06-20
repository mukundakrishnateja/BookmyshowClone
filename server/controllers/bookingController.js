// Function to check availability of seats for a particular showtime

import Booking from "../models/Booking.js";
import Show from "../models/Show.js"
import { sendTicketEmail } from "../utils/emailService.js"

export const getBookingFees = (bookingId) => {
    if (!bookingId) return { convenienceFee: 45, gst: 33 };
    let hash1 = 0;
    let hash2 = 0;
    for (let i = 0; i < bookingId.length; i++) {
        const char = bookingId.charCodeAt(i);
        if (i % 2 === 0) {
            hash1 = (hash1 + char * (i + 1)) % 100;
        } else {
            hash2 = (hash2 + char * (i + 1)) % 100;
        }
    }
    const convenienceFee = 35 + (hash1 % 31); // Random-looking but deterministic between ₹35 - ₹65
    const gst = 15 + (hash2 % 31); // Random-looking but deterministic between ₹15 - ₹45
    return { convenienceFee, gst };
};

export const cleanupExpiredBookings = async () => {
    try {
        const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
        // Find unpaid bookings older than 10 minutes
        const expiredBookings = await Booking.find({
            isPaid: false,
            createdAt: { $lt: tenMinutesAgo }
        });

        for (const booking of expiredBookings) {
            const showData = await Show.findById(booking.show);
            if (showData) {
                // Remove occupied seats for this booking
                booking.bookedSeats.forEach(seat => {
                    delete showData.occupiedSeats[seat];
                });
                showData.markModified('occupiedSeats');
                await showData.save();
            }
            await Booking.findByIdAndDelete(booking._id);
        }
    } catch (error) {
        console.error("Cleanup expired bookings error:", error.message);
    }
};

const checkSeatAvailability = async (showId, selectedSeats) => {
    try{
       const showData=  await Show.findById(showId)
       if(!showData) return false; 

       const occupiedSeats = showData.occupiedSeats || {};
       const isAnySeatTaken = selectedSeats.some(seat=>occupiedSeats[seat])
       return !isAnySeatTaken;
    }
    catch(error){
        console.log(error.message)
        return false;

    }
}

export const createBooking = async(req,res)=>{
    try{
        // Clean up expired bookings first to release seats
        await cleanupExpiredBookings();

        const {userId} = req.auth()
        const {showId,selectedSeats} = req.body
        const {origin} = req.headers;

        // Check if the seat is available for the selected show
        const isAvailable = await checkSeatAvailability(showId,selectedSeats)

        if (!isAvailable){
            return res.json({success: false, message: "Selected Seats are not available"})
        }
        // Get the show details
        const showData = await Show.findById(showId).populate('movie')

        if (!showData) {
            return res.json({success: false, message: "Show not found"})
        }

        // Check if show has started
        if (new Date(showData.showDateTime) < new Date()) {
            return res.json({success: false, message: "This show has already started."})
        }

        // Instantiate booking document to get its _id for deterministic random fee calculation
        const booking = new Booking({
            user: userId,
            show: showId,
            bookedSeats: selectedSeats,
            isPaid: false, // Create as unpaid to hold the seats until payment confirmation
            amount: 0
        });

        const { convenienceFee, gst } = getBookingFees(booking._id.toString());
        booking.amount = (showData.showPrice * selectedSeats.length) + convenienceFee + gst;
        await booking.save();

        selectedSeats.map((seat)=>{
            showData.occupiedSeats[seat] = userId;
        })
        showData.markModified('occupiedSeats');

        await showData.save();

        res.json({success:true, message:"Booking initiated successfully", bookingId: booking._id})

    }
    catch(error){
        console.log(error.message)
        res.json({success:false, message: error.message })
    }

}

export const getOccupiedSeats = async (req,res)=>{
    try{
        await cleanupExpiredBookings();

        const {showId} = req.params
        const showData = await Show.findById(showId)

        const occupiedSeats = Object.keys(showData.occupiedSeats)
        
        res.json({success:true, occupiedSeats })

    }
    catch(error){
         console.log(error.message)
        res.json({success:false, message: error.message })

    }

}

export const confirmPayment = async (req, res) => {
    try {
        const { bookingId } = req.body;
        const booking = await Booking.findById(bookingId);
        if (!booking) {
            return res.json({ success: false, message: "Booking not found" });
        }
        booking.isPaid = true;
        await booking.save();
        
        // Trigger ticket email sending asynchronously in the background
        sendTicketEmail(bookingId).catch(err => {
            console.error("Async sendTicketEmail error:", err.message);
        });

        res.json({ success: true, message: "Booked successfully" });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
};