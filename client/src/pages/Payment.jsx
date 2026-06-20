import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import BlurCircle from '../components/BlurCircle'
import Loading from '../components/Loading'
import { dateFormat } from '../library/dateFormat'
import isoTimeFormat from '../library/isoTimeFormat'
import { toast } from 'react-hot-toast'
import { 
  CreditCard, 
  Calendar, 
  MapPin, 
  Ticket, 
  Info, 
  ShieldCheck, 
  Lock,
  ArrowLeft
} from 'lucide-react'

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

const Payment = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const { axios, getToken, user, image_base_url } = useAppContext()
  const currency = import.meta.env.VITE_CURRENCY || 'Rs'

  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  // Redirect if no state is passed
  useEffect(() => {
    if (!state || !state.showId || !state.selectedSeats || !state.selectedSeats.length) {
      toast.error('Invalid checkout state')
      navigate('/')
    }
  }, [state, navigate])

  if (!state) return <Loading />

  const { bookingId, showId, selectedSeats, movie, showDateTime, showPrice } = state
  const { convenienceFee, gst } = getBookingFees(bookingId)
  const ticketAmount = selectedSeats.length * showPrice
  const grandTotal = ticketAmount + convenienceFee + gst

  const handlePayment = async (e) => {
    e.preventDefault()
    if (!user) {
      return toast.error('Please login to complete payment')
    }

    setIsProcessing(true)

    // Simulate payment process
    setTimeout(async () => {
      try {
        const token = await getToken()
        const { data } = await axios.post('/api/booking/confirm', {
          bookingId
        }, {
          headers: { Authorization: `Bearer ${token}` }
        })

        if (data.success) {
          setIsProcessing(false)
          setPaymentSuccess(true)
          toast.success('Payment Successful!')
          
          // Redirect after showing success animation
          setTimeout(() => {
            navigate('/my-bookings')
            scrollTo(0, 0)
          }, 2000)
        } else {
          setIsProcessing(false)
          toast.error(data.message || 'Payment simulation failed')
        }
      } catch (error) {
        setIsProcessing(false)
        toast.error(error.response?.data?.message || error.message || 'Payment simulation failed')
      }
    }, 1500)
  }

  return (
    <div className='relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-[90vh] overflow-hidden pb-20'>
      <style>{`
        @keyframes drawCheckmark {
          100% { stroke-dashoffset: 0; }
        }
        @keyframes popSuccess {
          0% { transform: scale(0); opacity: 0; }
          70% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        .checkmark-circle {
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
          animation: drawCheckmark 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
        }
        .checkmark-check {
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: drawCheckmark 0.35s cubic-bezier(0.65, 0, 0.45, 1) 0.6s forwards;
        }
        .success-box {
          animation: popSuccess 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>

      {/* Decorative Circles */}
      <BlurCircle top='10%' left='5%' />
      <BlurCircle bottom='15%' right='5%' />

      <button 
        onClick={() => navigate(-1)} 
        className='flex items-center gap-2 text-gray-400 hover:text-white transition mb-6 cursor-pointer text-sm font-medium'
      >
        <ArrowLeft className='w-4 h-4' /> Go Back
      </button>

      {paymentSuccess ? (
        <div className='success-box max-w-lg mx-auto bg-primary/10 border border-primary/20 backdrop-blur-md rounded-2xl p-10 flex flex-col items-center justify-center text-center my-10 shadow-2xl relative z-10'>
          <svg className="w-24 h-24 text-primary" viewBox="0 0 52 52" fill="none">
            <circle className="checkmark-circle stroke-current" strokeWidth="3" cx="26" cy="26" r="23" />
            <path className="checkmark-check stroke-current" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" d="M16 26l7 7 13-13" />
          </svg>
          
          <h2 className='text-3xl font-semibold text-white mt-6'>Payment Successful</h2>
          <p className='text-gray-300 mt-3 text-sm'>
            Your seats <span className='text-primary font-semibold'>{selectedSeats.join(', ')}</span> are confirmed!
          </p>
          
          {/* QR Code Container */}
          <div className='flex flex-col items-center justify-center bg-white p-2 rounded-lg border border-gray-700 w-28 h-28 mt-6 shadow-lg animate-pulse'>
            <img 
              src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=booking-${showId}-${selectedSeats.join('-')}`} 
              alt='Ticket QR Code' 
              className='w-24 h-24'
            />
          </div>

          <p className='text-gray-400 mt-6 text-xs'>
            Redirecting you to My Bookings page...
          </p>
        </div>
      ) : (
        <div className='relative z-10 max-w-6xl mx-auto'>
          <h1 className='text-3xl font-semibold mb-8 text-white flex items-center gap-3'>
            <CreditCard className='w-8 h-8 text-primary' /> Confirm Payment
          </h1>

          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
            {/* Left Column: Simulated Payment Form */}
            <div className='lg:col-span-7 bg-primary/8 border border-primary/25 rounded-2xl p-6 backdrop-blur-sm flex flex-col justify-between shadow-lg'>
              <div>
                <h2 className='text-xl font-medium mb-4 text-white flex items-center gap-2'>
                  Card Details <span className='text-xs text-gray-400'>(Simulated)</span>
                </h2>
                
                <form onSubmit={handlePayment} className='space-y-4'>
                  <div>
                    <label className='block text-xs text-gray-400 uppercase tracking-wider mb-1 font-semibold'>Cardholder Name</label>
                    <input 
                      type='text' 
                      required 
                      defaultValue='John Doe' 
                      disabled={isProcessing}
                      className='w-full px-4 py-3 bg-black/40 border border-primary/20 rounded-lg text-white outline-none focus:border-primary transition text-sm'
                    />
                  </div>

                  <div>
                    <label className='block text-xs text-gray-400 uppercase tracking-wider mb-1 font-semibold'>Card Number</label>
                    <div className='relative'>
                      <input 
                        type='text' 
                        required 
                        maxLength={19}
                        placeholder='4111 2222 3333 4444'
                        defaultValue='4111 2222 3333 4444'
                        disabled={isProcessing}
                        className='w-full pl-12 pr-4 py-3 bg-black/40 border border-primary/20 rounded-lg text-white outline-none focus:border-primary transition text-sm font-mono'
                      />
                      <CreditCard className='w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2' />
                    </div>
                  </div>

                  <div className='grid grid-cols-2 gap-4'>
                    <div>
                      <label className='block text-xs text-gray-400 uppercase tracking-wider mb-1 font-semibold'>Expiry Date</label>
                      <input 
                        type='text' 
                        required 
                        placeholder='MM/YY'
                        defaultValue='12/29'
                        disabled={isProcessing}
                        className='w-full px-4 py-3 bg-black/40 border border-primary/20 rounded-lg text-white outline-none focus:border-primary transition text-sm font-mono'
                      />
                    </div>
                    <div>
                      <label className='block text-xs text-gray-400 uppercase tracking-wider mb-1 font-semibold'>CVV</label>
                      <input 
                        type='password' 
                        required 
                        maxLength={3}
                        placeholder='***'
                        defaultValue='123'
                        disabled={isProcessing}
                        className='w-full px-4 py-3 bg-black/40 border border-primary/20 rounded-lg text-white outline-none focus:border-primary transition text-sm font-mono'
                      />
                    </div>
                  </div>

                  <div className='flex items-center gap-2 text-xs text-gray-400 bg-black/20 p-3 rounded-lg border border-primary/10 mt-6'>
                    <Info className='w-4 h-4 text-primary shrink-0' />
                    <span>No actual transaction will occur. This payment simulator will authorize instantly.</span>
                  </div>

                  <button 
                    type='submit' 
                    disabled={isProcessing}
                    className='w-full bg-primary hover:bg-primary-dull text-white py-3.5 rounded-lg font-medium transition cursor-pointer active:scale-98 flex items-center justify-center gap-2 mt-6 shadow-md shadow-primary/20 disabled:opacity-50'
                  >
                    {isProcessing ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processing Payment...
                      </>
                    ) : (
                      <>
                        <Lock className='w-4 h-4' /> Pay {currency} {grandTotal}
                      </>
                    )}
                  </button>
                </form>
              </div>

              <div className='flex items-center justify-center gap-2 text-xs text-gray-400 mt-6 pt-6 border-t border-primary/10'>
                <ShieldCheck className='w-4.5 h-4.5 text-green-500' /> Secure simulated transaction 
              </div>
            </div>

            {/* Right Column: Order Details & Pricing Summary */}
            <div className='lg:col-span-5 flex flex-col gap-6'>
              {/* Show & Movie Details Card */}
              <div className='bg-primary/10 border border-primary/20 rounded-2xl p-5 shadow-lg backdrop-blur-sm'>
                <div className='flex gap-4'>
                  <img 
                    src={image_base_url + movie.poster_path} 
                    alt={movie.title}
                    className='w-20 h-28 object-cover rounded-lg shadow-md border border-primary/10 shrink-0'
                  />
                  <div>
                    <h3 className='text-lg font-semibold line-clamp-2 text-white'>{movie.title}</h3>
                    <p className='text-xs text-primary uppercase font-bold mt-1'>{movie.original_language}</p>
                    <p className='text-xs text-gray-400 mt-1'>{movie.genres.join(', ')}</p>
                  </div>
                </div>

                <div className='border-t border-primary/10 mt-4 pt-4 space-y-3'>
                  <div className='flex items-center gap-2.5 text-sm text-gray-300'>
                    <MapPin className='w-4.5 h-4.5 text-primary' />
                    <span>BookMyShow Multiplex</span>
                  </div>

                  <div className='flex items-center gap-2.5 text-sm text-gray-300'>
                    <Calendar className='w-4.5 h-4.5 text-primary' />
                    <span>{dateFormat(showDateTime)} at {isoTimeFormat(showDateTime)}</span>
                  </div>

                  <div className='flex items-center gap-2.5 text-sm text-gray-300'>
                    <Ticket className='w-4.5 h-4.5 text-primary' />
                    <span>Seats: <strong className='text-white font-medium'>{selectedSeats.join(', ')}</strong> ({selectedSeats.length} Tickets)</span>
                  </div>
                </div>
              </div>

              {/* Bill Details Card */}
              <div className='bg-primary/10 border border-primary/20 rounded-2xl p-5 shadow-lg backdrop-blur-sm'>
                <h3 className='text-base font-semibold mb-4 text-white'>Order Summary</h3>
                
                <div className='space-y-3 text-sm text-gray-300'>
                  <div className='flex justify-between'>
                    <span>Ticket Subtotal ({selectedSeats.length} x {currency} {showPrice})</span>
                    <span>{currency} {ticketAmount}</span>
                  </div>

                  <div className='flex justify-between items-center'>
                    <span className='flex items-center gap-1.5'>
                      Convenience Fee <Info className='w-3.5 h-3.5 text-gray-500 cursor-help' title='Standard service charge' />
                    </span>
                    <span>{currency} {convenienceFee}</span>
                  </div>

                  <div className='flex justify-between items-center'>
                    <span className='flex items-center gap-1.5'>
                      GST <Info className='w-3.5 h-3.5 text-gray-500 cursor-help' title='Goods and Services Tax' />
                    </span>
                    <span>{currency} {gst}</span>
                  </div>

                  <div className='border-t border-primary/15 my-2 pt-3 flex justify-between text-base font-semibold text-white'>
                    <span>Grand Total</span>
                    <span className='text-primary'>{currency} {grandTotal}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Payment
