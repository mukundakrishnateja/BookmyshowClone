import React from 'react'
import Navbar from './components/Navbar'
import {Routes,Route,useLocation} from 'react-router-dom'
import Movies from './pages/Movies'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favorite from './pages/Favorite'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import Payment from './pages/Payment'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import ListShows from './pages/admin/ListShows'
import ListBookings from './pages/admin/ListBookings'
import AddShows from './pages/admin/AddShows'
import { useAppContext } from './context/AppContext'
import { SignIn } from '@clerk/react'

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin');
  const {user} = useAppContext()
  return (
    <>
    <Toaster/>
    {!isAdminRoute && <Navbar/>}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/movies/:id' element={<MovieDetails/>}/>
      <Route path='/movies/:id/:date' element={<SeatLayout/>}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/my-bookings' element={<MyBookings/>}/>
       <Route path='/favorite' element={<Favorite/>}/>
      <Route path='*' element={<h1>404 Not Found</h1>}/>
      <Route path='/admin/*' element={user ? <Layout/> : (
        <div className='min-h-screen flex justify-center items-center'>
          <SignIn fallbackRedirectUrl={'/admin'}/>
        </div>
      )}>
  <Route index element={<Dashboard/>}/>
  <Route path='dashboard' element={<Dashboard/>}/>
  <Route path='add-shows' element={<AddShows/>}/>
  <Route path='list-shows' element={<ListShows/>}/>
  <Route path='list-bookings' element={<ListBookings/>}/>
</Route>
      
   
    </Routes>
    {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App
