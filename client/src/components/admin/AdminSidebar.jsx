import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboardIcon,
  ListCollapseIcon,
  ListIcon,
  PlusSquareIcon,
} from 'lucide-react'

import { assets } from '../../assets/assets'

const AdminSideBar = () => {

  const user = {
    firstName: 'Admin',
    lastName: 'User',
    imageUrl: assets.profile,
  }

  const adminNavlinks = [
    {
      name: 'Dashboard',
      path: '/admin/dashboard',
      icon: LayoutDashboardIcon,
    },

    {
      name: 'Add Shows',
      path: '/admin/add-shows',
      icon: PlusSquareIcon,
    },

    {
      name: 'List Shows',
      path: '/admin/list-shows',
      icon: ListIcon,
    },

    {
      name: 'Bookings',
      path: '/admin/list-bookings',
      icon: ListCollapseIcon,
    },
  ]

  return (

    <div className='h-[calc(100vh-64px)] w-16 md:w-64 border-r border-gray-800 bg-black flex flex-col'>

     

      <div className='flex flex-col items-center py-8 border-b border-gray-800'>

        <img
          src={user.imageUrl}
          alt='profile'
          className='w-12 h-12 md:w-20 md:h-20 rounded-full object-cover border-2 border-primary'
        />

        <p className='hidden md:block mt-4 text-white font-semibold text-lg'>
          {user.firstName} {user.lastName}
        </p>

        <p className='hidden md:block text-gray-400 text-sm'>
          Administrator
        </p>

      </div>

      

      <div className='flex flex-col mt-4 gap-2 px-2'>

        {adminNavlinks.map((link, index) => {

          const Icon = link.icon

          return (

            <NavLink
              key={index}
              to={link.path}
              end

              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group
                 
                 ${
                   isActive
                     ? 'bg-primary text-white'
                     : 'text-gray-400 hover:bg-white/10 hover:text-white'
                 }`
              }
            >

              <Icon className='w-5 h-5 flex-shrink-0' />

              <p className='hidden md:block font-medium'>
                {link.name}
              </p>

            </NavLink>
          )
        })}

      </div>

    </div>
  )
}

export default AdminSideBar