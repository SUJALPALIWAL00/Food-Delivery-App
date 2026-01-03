import React, { useState , useEffect} from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Footer from './components/Footer'
import LogInPopup from './components/LogInPopup'
import { useNavigate } from 'react-router-dom'

const App = () => {
  const [showLogIn, setShowLogIn] = useState(false)

  // To Navigate to Home on reloadApp 
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <>
    {/* Show login popup while sign in or log in */}
    {showLogIn? <LogInPopup setShowLogIn={setShowLogIn} /> : <></>}
      <div className='app md:w-[80%] w-[90%] mx-auto'>
        <Navbar setShowLogIn={setShowLogIn} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/placeorder' element={<PlaceOrder />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App