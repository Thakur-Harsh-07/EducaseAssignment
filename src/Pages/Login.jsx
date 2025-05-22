import React from 'react'
import Button from '../Components/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import toast from 'react-hot-toast'
const Login = () => {
  
  const navigate = useNavigate();
  const[formData, setFormData] = useState({
    email:"",
    password:""
  })

  const handleChange=(e)=>{
    setFormData((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }
   const handleSubmit = (e) => {
      e.preventDefault();
      navigate('/profile')
      toast.success("Welcome to Profile Page")
      
      
      console.log(formData)
    }
  return (
    
    <motion.div className="top-0 left-0 flex flex-col items-center justify-center w-[375px] h-[812px] bg-[#F7F8F9] bg-no-repeat bg-[0%_0%]"
    initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
            duration: 0.8,
            delay: 0.4,
            type: "spring",
            stiffness: 60,
            damping: 12
            }}>
        <div className=' mr-[167px] ml-[20px]  top-[40px] left-[20px] w-[188px] h-[69px]  text-left font-rubik  text-[28px] leading-[36px] font-medium text-[#1D2226]'>
        Signin to your<br />PopX account
        
       
        </div>
        <p className=' bg-transparent ml-[-100px] mt-[14px] top-[123px] left-[20px] w-[232px] h-[48px] text-left font-normal text-[18px] leading-[26px] font-rubik text-[#1D2226]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,

         </p>
       
        
        
        <form onSubmit={handleSubmit} className="mt-[31px] flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="email" className='text-left font-rubik text-[13px] leading-[17px] w-[90px] font-regular text-[#6C25FF] relative top-1 left-3 bg-[#F7F8F9] px-1'>
                Email adress<sup >*</sup>
              </label>
              <input 
                type="email"
                id="email"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email' 
                className='w-[335px]  bg-transparent h-[40px] rounded-lg border-[1px]  border-[#CBCBCB] px-4'
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password"className='text-left font-rubik text-[13px] leading-[17px] font-regular text-[#6C25FF] relative w-[90px] top-1 left-3 bg-[#F7F8F9] px-1'>
                Password<sup>*</sup>
              </label>
              <input 
                type="password"
                id="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder='Enter your password' 
                className='bg-transparent w-[335px] h-[40px] rounded-lg border-[1px] border-[#CBCBCB] px-4'
              />
            </div>
            <Button 
          type="submit"
          variant="secondary"
          className=" left-[20px] top-[321px] w-[335px] h-[46px] text-white rounded-lg font-rubik text-[16px] font-medium"
        >
          Login
        </Button>
         </form>

      </motion.div>
  )
}

export default Login