/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from 'react';
import { Disclosure, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import SlideContext from '../Context/SlidebarContext';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

export default function Header() {
  // State to manage the search input value
  const [searchTerm, setSearchTerm] = useState('');
  // Function to handle search input changes
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const { open, setOpen, isTabletMid, openButton,  setOpenButton } = useContext(SlideContext);

  const clickOpenButton = ()=> {
    setOpenButton(!openButton)
  }


  return (
    <Disclosure as="nav" className="bg-white shadow-md ">
      <div className="mx-auto  px-4 ">
        <div className="relative flex h-16 items-center justify-between ">

        {/* Mobile menu button */}

        <div className="inset-y-0 left-0 flex items-center mr-5">
          {openButton? <div className="h-16 text-xl  border-b-2 flex justify-center items-center mr-28 transition-all duration-500">
            <p className=' font-sans font-extrabold text-gray-600'>Turbo Delivery</p>
            </div> : <a onClick={()=> setOpenButton(true)}><MenuIcon className='mr-3'/></a>}
        </div>
      

        <div className='flex justify-between flex-1 '>
          
          <div className="flex flex-1 relative items-center justify-between sm:items-stretch sm:justify-start mr-1 max-w-[80vh]">
            {/* Search input */}
                <input
                  type="text"
                  placeholder="Press / to search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="block rounded-full w-full bg-gray-200 border-gray-800 pl-10 pr-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 4a7 7 0 014.9 11.7l4.6 4.6a1 1 0 01-1.4 1.4l-4.6-4.6A7 7 0 1111 4z"
                    />
                  </svg>
                </span>
          </div>

          <div className="ml-5 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-1">
              <div className='flex '>
                <MenuButton className="relative p-1 flex items-center gap-2 mr-2 rounded bg-white text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://secure.gravatar.com/avatar/a12d183931379e89e08294a3cb5f7aa5?size=512"
                    className="h-8 w-8 rounded-full"
                  />
                <p className='font-bold text-gray-600'>Ali Mostafa<KeyboardArrowDownRoundedIcon className=' font-extrabold w-12 mb-1'/></p>       
                </MenuButton>
              </div>
              <MenuItems 
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>

          </div>

        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        {/* Mobile menu content */}
      </DisclosurePanel>

      
    </Disclosure>
  );
}
