import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, Calendar1Icon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 
    bg-[url("/theodysseybackgroundImage.jpg")] bg-cover bg-center h-screen'>

      <img 
        src={assets.universalpicturesLogo} 
        alt="" 
        className='h-15 mt-20 mb-2'
      />

      <h1 className='text-5xl md:text-[70px] md:leading-18 font-semibold'>
        The <br /> Odyssey
      </h1>

      <div className='flex items-center gap-6 text-gray-300'>
        <span>Mythology | Adventure | Epic Poetry</span>

        <div className='flex items-center gap-1'>
          <Calendar1Icon className='w-4 h-4' /> 2026
        </div>

        <div className='flex items-center gap-1'>
          <ClockIcon className='w-4 h-4' /> 2h 50m
        </div>
      </div>
      <p className='max-w-md text-gray-300'>The Odyssey, an ancient Greek epic attributed to Homer, follows Odysseus, king of Ithaca, on a perilous 10-year journey home after the Trojan War. While Odysseus battles mythical creatures and divine wrath, his wife, Penelope, and son, Telemachus, defend their home against unruly suitors. He eventually returns, kills the suitors, and reunites with his family.</p>
      <button onClick={()=> navigate('/movies')} className='flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>Explore Movies <ArrowRight className='w-5 h-5'/></button>

    </div>
  )
}

export default HeroSection