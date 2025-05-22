import React from 'react'
import Button from '../Components/Button'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <motion.div className='top-0 w-full sm:w-[375px] h-[812px] bg-[#F7F8F9] flex flex-col items-center justify-center border-2 border-[#F7F8F9]'
    initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
            duration: 0.8,
            delay: 0.4,
            type: "spring",
            stiffness: 60,
            damping: 12
            }}>
        <div className='flex flex-col gap-2 mb-4'>
            <h2 className='text-[28px] font-medium text-[#1D2226] leading-[17px] font-rubik'>Welcome to PopX</h2>
            <p className='text-[18px] leading-[26px] text-[#1D2226] opacity-60 font-normal font-rubik'>Lorem ipsum dolor sit amet,<br></br>
              consectetur, adipisicing elit.</p>
        </div>
        <div className='flex flex-col gap-3'>
            <Button 
              onClick={() => navigate('/signup')}
              className="text-center font-rubik text-[16px] leading-[17px] font-medium text-white"
            >
              Create Account
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => navigate('/login')}
              className="text-center font-rubik text-[16px] leading-[17px] font-medium text-[#1D2226] opacity-100"
            >
              Already Registered? Login
            </Button>
        </div>
    </motion.div>
  )
}

export default LandingPage