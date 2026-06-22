import { Resend } from 'resend';
import Booking from '../models/Booking.js';
import User from '../models/User.js';
import Show from '../models/Show.js';
import Movie from '../models/Movie.js';

export const sendTicketEmail = async (bookingId) => {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not defined. Email will not be sent.");
      return;
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Retrieve details
    const booking = await Booking.findById(bookingId)
      .populate('user')
      .populate({
        path: 'show',
        populate: { path: 'movie' }
      });

    if (!booking) {
      console.error(`Booking ${bookingId} not found for sending email.`);
      return;
    }

    const userEmail = booking.user?.email;
    const userName = booking.user?.name || "Customer";

    if (!userEmail) {
      console.error(`User email not found for booking ${bookingId}.`);
      return;
    }

    const movieTitle = booking.show?.movie?.title || "Movie";
    const movieLanguage = booking.show?.movie?.original_language || "";
    const movieGenres = booking.show?.movie?.genres?.join(', ') || "";
    const showDateTime = booking.show?.showDateTime;

    // Format date and time
    let showDateStr = "";
    let showTimeStr = "";
    if (showDateTime) {
      const dateObj = new Date(showDateTime);
      showDateStr = dateObj.toLocaleDateString('en-US', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
      showTimeStr = dateObj.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    }

    const seatsList = booking.bookedSeats?.join(', ') || "";
    const amountPaid = booking.amount || 0;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
        <div style="background-color: #F84464; padding: 20px; text-align: center; color: white;">
          <h1 style="margin: 0; font-size: 24px; font-weight: bold; letter-spacing: 1px;">BookMyShow Ticket</h1>
        </div>
        <div style="padding: 24px; background-color: #ffffff;">
          <p style="font-size: 16px; color: #333333; margin-top: 0;">Hi <strong>${userName}</strong>,</p>
          <p style="font-size: 15px; color: #555555; line-height: 1.5;">Here is your ticket. Enjoy your show! 🎬🍿</p>
          
          <div style="margin: 24px 0; border: 1px solid #f0f0f0; border-radius: 8px; overflow: hidden;">
            <div style="padding: 16px; background-color: #fafafa; border-bottom: 1px solid #f0f0f0;">
              <h2 style="margin: 0 0 8px 0; font-size: 18px; color: #111111;">${movieTitle}</h2>
              <p style="margin: 0; font-size: 13px; color: #888888;">${movieLanguage.toUpperCase()} &bull; ${movieGenres}</p>
            </div>
            
            <div style="padding: 16px;">
              <div style="margin-bottom: 12px;">
                <strong style="color: #666; font-size: 11px; display: block; text-transform: uppercase; letter-spacing: 0.5px;">Theatre</strong>
                <span style="color: #111; font-size: 14px;">BookMyShow Multiplex</span>
              </div>
              <div style="margin-bottom: 12px;">
                <strong style="color: #666; font-size: 11px; display: block; text-transform: uppercase; letter-spacing: 0.5px;">Date & Time</strong>
                <span style="color: #111; font-size: 14px;">${showDateStr} at ${showTimeStr}</span>
              </div>
              <div style="margin-bottom: 12px;">
                <strong style="color: #666; font-size: 11px; display: block; text-transform: uppercase; letter-spacing: 0.5px;">Seats</strong>
                <span style="color: #111; font-size: 14px; font-weight: bold; color: #F84464;">${seatsList}</span>
              </div>
              <div>
                <strong style="color: #666; font-size: 11px; display: block; text-transform: uppercase; letter-spacing: 0.5px;">Amount Paid</strong>
                <span style="color: #111; font-size: 14px; font-weight: bold;">Rs ${amountPaid}</span>
              </div>
            </div>
          </div>
          
          <div style="text-align: center; margin: 30px 0 10px 0;">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${bookingId}" alt="Ticket QR Code" style="width: 130px; height: 130px; border: 1px solid #ccc; padding: 6px; border-radius: 6px;" />
            <p style="margin: 8px 0 0 0; font-size: 12px; color: #999;">Scan at the entry gate</p>
          </div>
        </div>
        <div style="background-color: #f7f7f7; padding: 15px; text-align: center; font-size: 11px; color: #999; border-top: 1px solid #eee;">
          This is an automated confirmation email from BookMyShow Clone.
        </div>
      </div>
    `;

    console.log(`Sending ticket email for booking ${bookingId} to ${userEmail}...`);

    const { data, error } = await resend.emails.send({
      from: 'BookMyShow <onboarding@resend.dev>',
      to: [userEmail],
      subject: `Your Booking is Confirmed - ${movieTitle}!`,
      html: emailHtml,
    });

    if (error) {
      console.error(`Resend failed to send email:`, error);
    } else {
      console.log(`Ticket email sent successfully! Message ID:`, data.id);
    }

  } catch (error) {
    console.error("sendTicketEmail error:", error.message);
  }
};
