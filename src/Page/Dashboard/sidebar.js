import React, { useState } from 'react';
import "./sidebar.css";
import {
    FaTh,
    FaBars,
    FaUserAlt,
    // FaRegChartBar,
    FaCreditCard,
    // FaCommentAlt ,
    // // FaShoppingBag,
    // // FaThList
}from "react-icons/fa";
import {
    GiCancel,
}from "react-icons/gi"
import { NavLink } from 'react-router-dom';


const MenuSidebar = ({children}) => {
    // const[isOpen ,setIsOpen] = useState(false);
    // const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/Dashboard",
            name:"Users",
            icon:<FaUserAlt/>

        },
        // {
        //     path:"/UserBookings",
        //     name:"Bookings",
        //     icon:<FaTh/>
        // },
        // {
        //     path:"/UserCredits",
        //     name:"My credits",
        //     icon:<FaCreditCard/>
        // },
        // {
        //     path:"/UserCancellations",
        //     name:"Cancellations",
        //     icon:<GiCancel/>
        // },
        // {
        //             path:"/Accountsetting",
        //             name:"Account setting",
        //             icon:<FaUserAlt/>
        //         },
        // {
        //     path:"/Adlogin",
        //     name:"Admin",
        //     icon:<FaUserAlt/>



        // },

    ]
    return (
        <div className="container">
            
           <div  className="sidebar">
               <div className="top_section">
                 <a href="Sidebarhome"> <h1  className="home">Home</h1></a> 
                   <div  className="bars">
                       <FaBars />
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div  className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default MenuSidebar;