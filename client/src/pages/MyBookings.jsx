import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../assets/assets'
import Loading from '../components/Loading'
import BlurCircle from '../components/BlurCircle'
import timeFormat from '../library/TimeFormat'
import { dateFormat } from '../library/dateFormat'
import { useAppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

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
  const convenienceFee = 35 + (hash1 % 31);
  const gst = 15 + (hash2 % 31);
  return { convenienceFee, gst };
};

const MyBookings = () => {
  const navigate = useNavigate()
  const currency = import.meta.env.VITE_CURRENCY
  const {
       
      axios,
      getToken,
      user,
      image_base_url
    } = useAppContext()

  const [bookings, setBookings] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [now, setNow] = useState(Date.now())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(Date.now())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const getMyBookings = async () => {
    try{
      const {data} = await axios.get('/api/user/bookings',{
        headers:{Authorization: `Bearer ${await getToken()}`}
      })

      if(data.success){
        setBookings(data.bookings)
      }

    }catch(error){
      console.error(error)

    }
    setIsLoading(false)
  }

  useEffect(() => {

if(user){
  getMyBookings()
}
  
  }, [user])

  return !isLoading ? (
    <div className='relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-[80vh]'>
      <BlurCircle top='100px' left='100px' />
      <div>
        <BlurCircle bottom='0px' left='600px'/>
      </div>
      <h1 className='text-lg font-semibold mb-4'>My Bookings</h1>


      {bookings
        .filter((item) => {
          if (!item.show || !item.show.movie) return false;
          const showStartTime = new Date(item.show.showDateTime).getTime();
          const movieRuntime = item.show.movie.runtime || 120;
          const showEndTime = showStartTime + movieRuntime * 60 * 1000;
          return showEndTime > now;
        })
        .map((item,index)=>{
          const { convenienceFee, gst } = getBookingFees(item._id);
          const subtotal = item.amount - convenienceFee - gst;
          return (
          <div key={index} className='flex flex-col md:flex-row justify-between bg-primary/8 border border-primary/20 rounded-lg mt-4 p-2 max-w-3xl'>
            <div className='flex flex-col md:flex-row flex-1'>
              <img src={image_base_url + item.show.movie.poster_path} alt='' className='md:max-w-41 aspect-video h-auto object-cover object-bottom rounded'/>
              <div className='flex flex-col p-4'>
                <p className='text-lg font-semibold'>{item.show.movie.title}</p>
                <p className='text-gray-400 text-sm'>{timeFormat(item.show.movie.runtime)}</p>
                
                <div className='mt-2 flex flex-col gap-1.5 md:mt-auto'>
                  <p className='text-gray-400 text-sm'>{dateFormat(item.show.showDateTime)}</p>
                  {(() => {
                    const showStartTime = new Date(item.show.showDateTime).getTime();
                    const timeDiff = showStartTime - now;
                    if (timeDiff > 0) {
                      const secs = Math.floor(timeDiff / 1000);
                      const mins = Math.floor(secs / 60);
                      const hours = Math.floor(mins / 60);
                      const days = Math.floor(hours / 24);

                      let timerStr = "";
                      if (days > 0) {
                        timerStr = `${days}d ${hours % 24}h`;
                      } else {
                        const h = String(hours % 24).padStart(2, '0');
                        const m = String(mins % 60).padStart(2, '0');
                        const s = String(secs % 60).padStart(2, '0');
                        timerStr = `${h}:${m}:${s}`;
                      }
                      return (
                        <div className='flex'>
                          <span className='inline-flex items-center gap-1 bg-primary/10 border border-primary/20 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full animate-pulse'>
                            🕒 Starts in {timerStr}
                          </span>
                        </div>
                      );
                    } else {
                      return (
                        <div className='flex'>
                          <span className='inline-flex items-center gap-1 bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-semibold px-2.5 py-0.5 rounded-full'>
                            🎬 Show has started
                          </span>
                        </div>
                      );
                    }
                  })()}
                </div>
              </div>

            </div>


            <div className='flex flex-col sm:flex-row items-center gap-6 p-4'>
              <div className='flex flex-col md:items-end md:text-right justify-between'>
                <div className='flex items-center gap-4 '>
                  <p className='text-2xl font-semibold mb-3'>{currency} {item.amount}</p>
                  {!item.isPaid && (
                    <button 
                      onClick={() => {
                        navigate('/payment', {
                          state: {
                            bookingId: item._id,
                            showId: item.show._id,
                            selectedSeats: item.bookedSeats,
                            movie: item.show.movie,
                            showDateTime: item.show.showDateTime,
                            showPrice: item.show.showPrice
                          }
                        });
                        scrollTo(0,0);
                      }} 
                      className='bg-primary hover:bg-primary-dull text-white px-4 py-1.5 mb-3 text-sm rounded-full font-medium cursor-pointer transition active:scale-95'
                    >
                      Pay Now
                    </button>
                  )}
                </div>

                <div className='text-sm space-y-1 mt-2'>
                  <p><span className='text-gray-400'>Total Tickets: </span>{item.bookedSeats.length}</p>
                  <p><span className='text-gray-400'>Seat Number: </span>{item.bookedSeats.join(", ")}</p>
                  {subtotal > 0 ? (
                    <>
                      <p><span className='text-gray-400'>Ticket Subtotal: </span>{currency} {subtotal}</p>
                      <p><span className='text-gray-400'>Convenience Fee: </span>{currency} {convenienceFee}</p>
                      <p><span className='text-gray-400'>GST: </span>{currency} {gst}</p>
                    </>
                  ) : (
                    <p><span className='text-gray-400'>Ticket Subtotal: </span>{currency} {item.amount}</p>
                  )}
                </div>
              </div>

              {/* QR Code Section */}
              {item.isPaid ? (
                <div className='flex flex-col items-center justify-center bg-white p-2 rounded-lg border border-gray-700 w-24 h-24 shrink-0 shadow-md'>
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${item._id || index}`} 
                    alt='Ticket QR Code' 
                    className='w-20 h-20'
                  />
                </div>
              ) : (
                <div className='flex flex-col items-center justify-center bg-gray-800/10 p-2 rounded-lg border border-dashed border-gray-400 w-24 h-24 shrink-0 shadow-sm'>
                  <p className='text-xs text-gray-500 text-center font-medium'>Payment Pending</p>
                </div>
              )}
            </div>

          </div>
        )
      })}
      
    </div>
  ) : <Loading/>
}

export default MyBookings
