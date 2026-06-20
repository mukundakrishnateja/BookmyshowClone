import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import { ArrowRightIcon, ClockIcon } from 'lucide-react'
import { assets, dummyDateTimeData, dummyShowsData } from '../assets/assets'
import isoTimeFormat from '../library/isoTimeFormat'
import BlurCircle from '../components/BlurCircle'
import toast from 'react-hot-toast'
import { useAppContext } from '../context/AppContext'

const SeatLayout = () => {

  const groupRows = [
    ["A", "B"],
    ["C", "D"],
    ["E", "F"],
    ["G", "H"],
    ["I", "J"]
  ]

  const { id, date } = useParams()

  const [selectedSeats, setSelectedSeats] = useState([])
  const [selectedTime, setSelectedTime] = useState(null)
  const [show, setShow] = useState(null)
  const [occupiedSeats,setOccupiedSeats] = useState([])

  const navigate = useNavigate()

  const {axios,getToken,user} = useAppContext()

  const getShow = async () => {
    try {
      const {data} = await axios.get(`/api/show/${id}`)
      if(data.success){
        setShow(data)
      }
      
    } catch (error) {
      console.log(error)
    }

    
  }

 const handleSeatClick = (seatId) => {

  if (!selectedTime) {
    return toast.error("Please select a time");
  }

  // Prevent clicking booked seats
  if (occupiedSeats.includes(seatId)) {
    return toast.error("This seat is already booked");
  }

  // Maximum 5 seats
  if (
    !selectedSeats.includes(seatId) &&
    selectedSeats.length >= 5
  ) {
    return toast.error("You can select maximum of 5 seats");
  }

  setSelectedSeats(prev => {
    if (prev.includes(seatId)) {
      return prev.filter(seat => seat !== seatId);
    }

    return [...prev, seatId];
  });
};
  const renderSeats = (row, count = 9) => (

    <div key={row} className='flex gap-2 mt-2'>

      <div className='flex flex-wrap items-center justify-center gap-2'>

        {Array.from({ length: count }, (_, i) => {

          const seatId = `${row}${i + 1}`

          return (
            <button
              key={seatId}
              onClick={() => handleSeatClick(seatId)}
              className={`h-8 w-8 rounded border border-primary/60 cursor-pointer transition-all
              ${selectedSeats.includes(seatId)&& "bg-primary text-white"} ${occupiedSeats.includes(seatId) && 'opacity-50'}`}
            >
              {seatId}
            </button>
          )

        })}

      </div>

    </div>

  )

  const getOccupiedSeats = async () => {
    try {
      const {data} = await axios.get(`/api/booking/seats/${selectedTime.showId}`)
      if(data.success){
        setOccupiedSeats(data.occupiedSeats)
      }
      else{
        toast.error(data.message)
      }

      
    } catch (error) {
      console.log(error)
    }
  }

  const bookTickets = async()=>{
    if(!user) return toast.error('Please login to book tickets')
    if(!selectedTime || !selectedSeats.length) return toast.error('Please select time and seats to proceed')
    if (new Date(selectedTime.time).getTime() <= Date.now()) {
      return toast.error("This show has already started");
    }

    const loadingToast = toast.loading('Initiating checkout...')
    try {
      const { data } = await axios.post('/api/booking/create', {
        showId: selectedTime.showId,
        selectedSeats
      }, {
        headers: { Authorization: `Bearer ${await getToken()}` }
      });

      toast.dismiss(loadingToast);

      if (data.success) {
        // Redirect to the dedicated payment page with the booking ID
        navigate('/payment', {
          state: {
            bookingId: data.bookingId,
            showId: selectedTime.showId,
            selectedSeats,
            movie: show.movie,
            showDateTime: selectedTime.time,
            showPrice: selectedTime.showPrice
          }
        });
        scrollTo(0,0);
      } else {
        toast.error(data.message || 'Failed to initiate checkout');
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error(error.response?.data?.message || error.message);
    }
  }
  useEffect(() => {
    getShow()
  }, [])

  useEffect(()=>{
    if(selectedTime){
      getOccupiedSeats()
    }
  },[selectedTime])

  return show ? (

    <div className='flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50'>

      {/* Available Timings */}
      <div className='w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30'>

        <p className='text-lg font-semibold px-6'>
          Available Timings
        </p>

        <div className='mt-5 space-y-1'>

          {show?.dateTime?.[date]?.map((item, index) => {
            const hasStarted = new Date(item.time).getTime() <= Date.now();
            return (
              <div
                key={index}
                onClick={() => {
                  if (hasStarted) {
                    toast.error("This show has already started");
                    return;
                  }
                  setSelectedTime(item);
                }}
                className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md transition
                ${hasStarted 
                  ? "opacity-50 cursor-not-allowed hover:bg-transparent" 
                  : "cursor-pointer"
                }
                ${selectedTime?.time === item.time && !hasStarted
                    ? "bg-primary text-white"
                    : !hasStarted ? "hover:bg-primary/20" : ""
                  }`}
              >
                <ClockIcon className='w-4 h-4' />
                <div className='flex flex-col'>
                  <p className='text-sm font-medium'>
                    {isoTimeFormat(item.time)}
                  </p>
                  {hasStarted && (
                    <span className='text-[10px] text-red-500 font-semibold uppercase tracking-wider'>
                      Started
                    </span>
                  )}
                </div>
              </div>
            );
          })}

        </div>

      </div>

      {/* Seat Layout */}
      <div className='relative flex-1 flex flex-col items-center max-md:mt-16'>

        <BlurCircle top='-100px' left='-100px' />
        <BlurCircle bottom='0px' right='0px' />

        <h1 className='text-2xl font-semibold mb-4'>
          Select your seat
        </h1>

        <img
          src={assets.screenImage}
          alt='screen'
        />

        <p className='text-gray-400 text-sm mb-6'>
          SCREEN SIDE
        </p>

        {/* First Group */}
        <div className='flex flex-col items-center gap-4 mt-10 text-xs text-gray-300'>

          <div>
            {groupRows[0].map(row => renderSeats(row))}
          </div>
           {/* Remaining Groups */}
        <div className='grid grid-cols-2 gap-11 mt-6'>

          {groupRows.slice(1).map((group, index) => (

            <div key={index}>

              {group.map(row => renderSeats(row))}

            </div>

          ))}

        </div>

        </div>

        {selectedSeats.length > 0 && selectedTime && (
          <div className='mt-8 w-full max-w-sm bg-primary/10 border border-primary/20 rounded-xl p-5 text-sm space-y-2.5 backdrop-blur-sm shadow-md animate-fade-in'>
            <h3 className='font-semibold text-base text-white border-b border-primary/10 pb-2 mb-2'>Order Summary</h3>
            <div className='flex justify-between text-gray-300'>
              <span>Tickets ({selectedSeats.length} x {import.meta.env.VITE_CURRENCY || 'Rs'} {selectedTime.showPrice})</span>
              <span>{import.meta.env.VITE_CURRENCY || 'Rs'} {selectedSeats.length * selectedTime.showPrice}</span>
            </div>
            <div className='flex justify-between text-gray-300'>
              <span>Convenience Fee</span>
              <span>{import.meta.env.VITE_CURRENCY || 'Rs'} 45</span>
            </div>
            <div className='flex justify-between text-gray-300'>
              <span>GST</span>
              <span>{import.meta.env.VITE_CURRENCY || 'Rs'} 33</span>
            </div>
            <div className='flex justify-between text-base font-semibold text-white pt-2 border-t border-primary/10'>
              <span>Estimated Total</span>
              <span className='text-primary'>{import.meta.env.VITE_CURRENCY || 'Rs'} {(selectedSeats.length * selectedTime.showPrice) + 45 + 33}</span>
            </div>
          </div>
        )}

        <button onClick={bookTickets}className='flex items-center gap-1 mt-10 px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer active:scale-95'>Proceed to Checkout <ArrowRightIcon strokeWidth={3} className='w-4 h-4'/></button>

       

      </div>

    </div>

  ) : (
    <Loading />
  )
}

export default SeatLayout