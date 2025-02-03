import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src="./logo.png" alt="" width={120} />
        </div>
        <div className="links">
           <ul>
                <li>Categories</li>
                <li>Deals</li>
                <li>What's New</li>
                <li>Delivery</li>
            </ul> 
        </div>
        <div className="settings">
            <input type="text" placeholder='Search...'/>
            <Link style={{textDecoration:'none' , color:'inherit'}}><FaUserCircle size={28}/></Link>
            <Link style={{textDecoration:'none' , color:'inherit'}}><FaShoppingCart size={24} /></Link>
        </div>
    </div>
  )
}

export default Navbar