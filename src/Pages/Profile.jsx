import React from "react";
import profile from "../assets/profile.png";
import camera from "../assets/camera.png";
import Button from "../Components/Button";
import {useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import toast from "react-hot-toast";

const Profile = () => {
  const navigate = useNavigate();
  const handleOnClick=()=>{
    navigate('/');
    toast.success("Logged Out");
  }
  return (
    <motion.div className="bg-[#F7F8F9] w-[375px] h-[730px] border-2 border-gray-200"
    initial={{ opacity: 0, x: -60, scale: 0.95 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={{
    duration: 0.8,
    delay: 0.4,
    type: "spring",
    stiffness: 60,
    damping: 12
    }}>
      <div className="bg-white h-[68px] drop-shadow shadow-[0px_3px_6px_#00000007] text-lg leading-[21px] text-[#1D2226] flex items-center pl-4">
        Account Settings
      </div>
      <div className="px-5 mt-5 space-y-[30px]">
        <div className="flex items-start gap-5 text-[#1D2226]">
                  <img src={profile} alt="profile photo" className="relative"/>
                  <img src={camera} alt="camera" className="absolute ml-14.5 mt-12.5"/>
          <div className="space-y-1 ">
            <p className="text-[15px] font-medium  capitalize">Marry Doe</p>
            <p className="text-sm leading-[19px]">Maary@Gmail.com</p>
          </div>
        </div>
        <p className="text-sm leading-[22px]">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
      <p className="mt-5 border border-dashed border-[#CBCBCB] space-x-4"></p>
      <Button className="mt-[20px]"
      
      onClick={handleOnClick}>Logout</Button>
    </motion.div>
  );
};

export default Profile;