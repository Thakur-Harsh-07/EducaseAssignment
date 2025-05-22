import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import toast from 'react-hot-toast'

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes"
  })
  

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
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
    initial={{ opacity: 0, x: -60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
            duration: 0.8,
            delay: 0.4,
            type: "spring",
            stiffness: 60,
            damping: 12
            }}>
      <div className=' mr-[167px] ml-[20px]  top-[40px] left-[20px] w-[188px] h-[69px]  text-left font-rubik  text-[28px] leading-[36px] font-medium text-[#1D2226]'>
        Create your <br />PopX account
      </div>
      
      <form onSubmit={handleSubmit} className="mt-[31px] flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="name" className='text-left font-rubik text-[13px] leading-[17px] font-regular text-[#6C25FF] relative w-[90px] top-1 left-3 bg-[#F7F8F9] px-1'>
            Full Name<sup>*</sup>
          </label>
          <input 
            type="text" 
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter your full name' 
            className='bg-transparent w-[335px] h-[40px] rounded-lg border-[1px] border-[#CBCBCB] px-4'
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className='text-left font-rubik text-[13px] leading-[17px] font-regular text-[#6C25FF] relative w-[100px] top-1 left-3 bg-[#F7F8F9] px-1'>
            Phone Number<sup>*</sup>
          </label>
          <input 
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder='Enter your phone number' 
            className='bg-transparent w-[335px] h-[40px] rounded-lg border-[1px] border-[#CBCBCB] px-4'
          />
        </div>

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
        <div className="flex flex-col">
          <label htmlFor="company" className='text-left font-rubik text-[13px] leading-[17px] font-regular text-[#6C25FF] relative w-[130px] top-1 left-3 bg-[#F7F8F9] px-1'>
            Company Name<sup>*</sup>
          </label>
          <input 
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            placeholder='Enter your company name' 
            className='bg-transparent w-[335px] h-[40px] rounded-lg border-[1px] border-[#CBCBCB] px-4'
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="isAgency" className='text-left font-rubik text-[13px] leading-[17px] font-regular text-[#1D2226]  '>
            Are You an Agency?<sup>*</sup>
          </label>
          <div className="flex gap-6 mt-2">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="agency"
                value="Yes"
                checked={formData.agency === "Yes"}
                onChange={handleChange}
                className="accent-[#6C25FF] size-4 cursor-pointer"
              />
              Yes
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="agency"
                value="No"
                checked={formData.agency === "No"}
                onChange={handleChange}
                className="accent-[#6C25FF] cursor-pointer size-4"
              />
              No
            </label>
          </div>
        </div>
           
        <button 
          type="submit"
          className="mt-[150px]  left-[20px] top-[736px] w-[335px] h-[46px] bg-[#6C25FF] text-white rounded-lg font-rubik text-[16px] font-medium"
        >
          Create Account
        </button>
      </form>
    </motion.div>
  )
}

export default Signup