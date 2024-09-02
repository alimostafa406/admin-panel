import React, { useContext, useState } from 'react';
import '../index.css'
import { Link } from 'react-router-dom';
import { FaHome, FaList, FaStore, FaBox, FaTruck, FaTag, FaUsers} from 'react-icons/fa'; // Example icons
import SlideContext from '../Context/SlidebarContext';
import { motion } from 'framer-motion';


const Sidebar = () => {
    const SIDEBAR_LINKS = [
        { id: 1, path: "/", name: "Dashboard", icon: <FaHome className="w-5 h-5" /> },
        { id: 2, path: "/orders", name: "Orders", icon: <FaList className="w-5 h-5" /> },
        { id: 3, path: "/stores", name: "Stores", icon: <FaStore className="w-5 h-5" /> },
        { id: 4, path: "/items", name: "Items", icon: <FaBox className="w-5 h-5" /> },
        { id: 5, path: "/deliveries", name: "Deliveries", icon: <FaTruck className="w-5 h-5" /> },
        { id: 6, path: "/offers", name: "Offers", icon: <FaTag className="w-5 h-5" /> },
        { id: 7, path: "/users", name: "Users", icon: <FaUsers className="w-5 h-5" /> },
    ];

const [activeLink , setActiveLink] = useState(0);

const addActive = (index)=> {
    setActiveLink(index)
}

const {openButton,setOpenButton } = useContext(SlideContext);

const sidebarAnimation =  {
                        open: {
                        x: 0,
                        width: "12rem",
                        transition: {
                            type: 'spring',
                            stiffness: 300,
                            damping: 50,
                            duration: 0.5,
                        },
                        },
                        closed: {
                        x: -250,
                        width: 0,
                        transition: {
                            type: 'spring',
                            stiffness: 300,
                            damping: 50,
                            duration: 0.005,
                        },
                        },            
                    };
                    console.log(openButton + "sss");
                    

    return (
        <motion.div variants={sidebarAnimation} animate={openButton ? "open" : "closed"} className=" min-h-[92.5vh] bg-gray-600 text-white fs:flex flex-col relative">
        <div onClick={() => setOpenButton(false)} className={`md:hidden absolute w-screen inset-0 left-[12rem]  bg-black/50 transition-all duration-500 ${
          openButton ? "block" : "hidden"
        } `}>
        </div>
        <nav className="flex-1 mt-4 bg-gray-600">
            <ul>
                {SIDEBAR_LINKS.map(link => (
                    <li key={link.id} className="mb-2">
                        <Link 
                            onClick={()=>addActive(link.id)}
                            to={link.path}
                            className={`flex items-center p-3 text-gray-300 hover:text-gray-800 rounded-md transition duration-200 " ${activeLink === link.id?'bg-gray-800' : '' }`}
                        >
                            {link.icon}
                            <span className="ml-3">{link.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>

        </motion.div>
    );
}

export default Sidebar;