import React from 'react'
import { Form } from 'react-router-dom'
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className='placeOrder  w-full mt-20 mb-30 flex flex-col md:flex-row justify-between'>
      <div className="left md:w-[34%]">
        <p className='text-3xl font-bold mb-7'>Delivery Information</p>
        <form action="">
          <div className="inputs flex flex-col gap-3">
            <div className="multiField flex gap-2">
            <input type="text" placeholder='First name' className='border border-gray-300 py-1 pl-1 w-[170px] md:w-[200px]' />
            <input type="text" placeholder='Last name' className='border border-gray-300 py-1 pl-1 w-[170px] md:w-[200px]' />
          </div>
          <input type="email" placeholder='Email address' className='border border-gray-300 py-1 pl-1 w-[348px] md:w-[387px]' />
          <input type="text" placeholder='Address' className='border border-gray-300 py-1 pl-1 w-[348px] md:w-[387px]' />

          <div className="multiField flex gap-2">
            <input type="text" placeholder='City' className='border border-gray-300 py-1 pl-1 w-[170px] md:w-[200px]' />
            <input type="text" placeholder='State' className='border border-gray-300 py-1 pl-1 w-[170px] md:w-[200px]' />
          </div>

          <div className="multiField flex gap-2">
            <input type="text" placeholder='Zip code' className='border border-gray-300 py-1 pl-1 w-[170px] md:w-[200px]' />
            <input type="text" placeholder='Country' className='border border-gray-300 py-1 pl-1 w-[170px] md:w-[200px]' />
          </div>
          <input type="text" placeholder='Phone no.' className='border border-gray-300 py-1 pl-1 w-[348px] md:w-[387px]' />
          </div>
        </form>

      </div>

      <div className="right md:w-[30%] w-[95%] mt-15 md:mt-0">
        <div className="flex flex-col gap-3">
          <h2 className='font-bold text-2xl mb-5 '>Cart Total</h2>
          <div className="SubTotal flex justify-between border-b border-gray-200 font-medium text-gray-400  ">
            <p>Sub Total</p>
            <p>₹{getTotalCartAmount()}</p>
          </div>
          <div className="delCharges flex justify-between border-b border-gray-200 font-medium text-gray-400  ">
            <p>Delivery Charges </p>
            <p>₹40</p>
          </div>
          <div className="total flex justify-between border-b border-gray-200 font-bold text-gray-600   ">
            <p>Total</p>
            <p>₹{getTotalCartAmount() + 40}</p>
          </div>
          <button className='bg-[#FF6347] w-fit py-2 px-7 rounded mt-3 text-white cursor-pointer' >Proceed to Payment</button>

        </div>
      </div>
    </div>

  )
}

export default PlaceOrder
