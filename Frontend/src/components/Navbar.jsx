import React, { useState, useContext } from 'react'
import '../index.css'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'

const Navbar = ({setShowLogIn}) => {

  const [menu, setMenu] = useState("home");
  const {getTotalCartAmount} = useContext(StoreContext);


  return (
    
      <div className="navbar bg-white flex  justify-between items-center mt-5 md:mt-8 color-[#49557e] ">
        <div className="navbar-left">
          <Link to="/"><img className='logo w-[130px] md:w-full' src={assets.logo} alt=""/></Link>
        </div>

        <div className="navbar-mid">
          <ul className='navbar-menu md:flex gap-5 hidden '>
            <Link to='/' onClick={() => { setMenu("home") }} className={`${menu === 'home' ? "active" : ""} cursor-pointer`}>Home</Link>
            <a href='#Menu' onClick={() => { setMenu("menu") }} className={`${menu === 'menu' ? "active" : ""} cursor-pointer`}>Menu</a>
            <a href='#MobileApp' onClick={() => { setMenu("mobileApp") }} className={`${menu === 'mobileApp' ? "active" : ""} cursor-pointer`}>Mobile App</a>
            <a href='#ContactUs' onClick={() => { setMenu("contactUs") }} className={`${menu === 'contactUs' ? "active" : ""} cursor-pointer`}>Contact Us</a>
          </ul>
        </div>

        <div className="navbar-right flex gap-5 scale-90 md:scale-100 ">
          <img src={assets.search_icon} alt="" className='cursor-pointer' />
          <Link to="/cart"><img src={assets.basket_icon} alt="" className='cursor-pointer' /></Link>
          <button onClick={()=>setShowLogIn(true)} className='border border-[#ff6347] rounded-3xl px-4 py-1 transition duration-300 hover:bg-[#fff4f2] cursor-pointer'>Sign in</button>
          <div className={`dot absolute  border-5 border-[#FF6347] rounded-full -top-2.5 right-24 ${getTotalCartAmount()===0 ? "hidden": "block" } `}></div>
        </div>
      </div>
  )
}

export default Navbar
