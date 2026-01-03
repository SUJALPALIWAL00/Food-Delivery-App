import React, { useState } from 'react'
import { assets } from '../assets/assets'

const LogInPopup = ({setShowLogIn}) => {
    const [currentState,setcurrentState] = useState("Log In")
  return (
    <div className='bg-[#000000c9] w-[100%]  h-[100vh] fixed top-0 left-0 z-1 flex justify-center items-center  ' onClick={()=>setShowLogIn(false)}>
      <div className="logInForm bg-white md:w-[23vw] w-[85vw] py-5 px-7  rounded-xl " onClick={(e) => e.stopPropagation()}>
        <div className="title flex justify-between">
            <p className='font-bold text-2xl'>{currentState}</p>
            <img className='w-[16px] h-[16px]' onClick={()=>setShowLogIn(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="inputs mt-5">
            <form action="" className='flex flex-col gap-5'>
                {currentState=="Log In"?<></>:<input className='shadow rounded-sm pl-2 py-2 ' type="text" placeholder='Your Name' required/>}
                <input className='shadow rounded-sm pl-2 py-2 ' type="email" placeholder='Your E-mail' required/>
                <input className='shadow rounded-sm pl-2 py-2 ' type="password" placeholder='Password' required/>
            </form>
        </div>
        <button className='w-full py-2 rounded-sm mt-5 mb-2 bg-[#FF6347] text-white'>{currentState=="Sign In"?"Create account":"Log In"}</button>
        <div className="Condition flex gap-2">
            <input type="checkbox" className='mb-5'  required/>
            <p className='text-[14px] font-light'>By continuing, I agree to the terms of use & privacy Policy.</p>
        </div>
        <div className="alredyExist mt-5">
            {currentState=="Log In"?<p className='text-[14px] font-light' >Create a new account? <span onClick={()=>setcurrentState("Sign In")} className='text-[#FF6347] font-medium cursor-pointer' >Click here</span></p> : <p className='text-[14px] font-light'>Already have an account? <span onClick={()=>setcurrentState("Log In")} className='text-[#FF6347] font-medium cursor-pointer' >Login Here</span></p> }           
        </div>
      </div>
    </div>
  )
}

export default LogInPopup
