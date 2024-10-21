import  { useEffect, useState } from "react";
import VideoBackground from "./VideoBackground";
import { Menu } from "lucide-react";
import Countdown from "react-countdown";
import CountdownTimer from "../Contdown/CountDown"; 

const Header = () => {


  
  return (
    <>
    <div>
      <VideoBackground></VideoBackground>
      <div className="max-w-[100%] relative z-10 " id="main"> 
        <div className="w-[90%]  relative top-3 bg-white lg:text-white lg:bg-transparent  mx-auto px-5 rounded-full lg:px-5 grid grid-cols-2 lg:grid-cols-2 py-4 items-center text-black">
          <div>
            <p className="font-[Stylish] text-[20px] lg:text-[24px]">Techx 24</p>
          </div>
          <div
            className="absolute w-[95%] left-2 top-20 rounded-3xl py-5 lg:static hidden lg:flex lg:justify-end lg:bg-transparent bg-white"
            id="menu"

            tabIndex={-1}
          >
            <ul className=" lg:static flex   flex-col lg:flex-row  lg:flex gap-5 font-[Stylish] text-[20px] text-center">
              <li>Home</li>
              <li>About</li>
              <li>Event</li>
              <li>Schedule</li>
              <li>Contact</li>
              <li>Register</li>
            </ul>
          </div>
          <div
            className=" lg:hidden flex justify-end"
            onClick={() => {
              let e = document.getElementById("menu");
              e.classList.toggle("hidden");
              let a= document.getElementById("main")
              a.classList.toggle("backdrop-blur-3xl")
            }}
          >
            <Menu></Menu>
          </div>
          
        </div>
        <div className="w-[100%] lg:w-[70%] justify-center mx-auto gap-5 lg:gap-0 items-center grid grid-cols-1 lg:py-[40px] pt-[80px]">
          <div className="text-white font-bold text-center">
            <p className="font-[Stylish] text-[28px] lg:text-[52px] text-center">
              Department of Computer Science
            </p>
            <p className="font-[Stylish] text-[18px] lg:text-[24px]">
              St. Joseph's College (Autonomous)
            </p>
            <p className="font-[Stylish] text-[12px]">
              College with Potential for Excellence by UGC
            </p>
            <p className="font-[Stylish] text-[12px]">
              Accredited at A++ Grade (Cycle IV) by NAAC
            </p>
            <p className="font-[Stylish] text-[12px]">
              Tiruchirappalli - 620002
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-5  lg:mt-0">
            <div>
              <p className="text-[50px] lg:text-[100px] text-center font-[Stylish] text-white">
                TECHX'24
              </p>
            </div>
            <div>
              <span></span>
              <CountdownTimer></CountdownTimer>
            </div>
            <div className="flex justify-center">
              <a
                href="#_"
                className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                <span className="relative font-[Stylish] text-[22px]">
                  Register Now
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  );
};

export default Header;
