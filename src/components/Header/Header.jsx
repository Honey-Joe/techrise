import  { useEffect, useState } from "react";
import VideoBackground from "./VideoBackground";
import { Menu } from "lucide-react";
import Countdown from "react-countdown";

const Header = () => {


  
  return (
    <>
      <VideoBackground></VideoBackground>
      <div className="max-w-[100%] relative">
        <div className="lg:w-[90%] relative mx-auto px-5 lg:px-0 grid grid-cols-2 lg:grid-cols-2 py-5 items-center text-white">
          <div>
            <p className="font-[Stylish] text-[24px]">Techx 24</p>
          </div>
          <div
            className="absolute w-[100%] top-14 left-0 lg:static hidden lg:flex lg:justify-end lg:bg-transparent bg-[rgb(2,4,8)]"
            id="menu"
          >
            <ul className=" lg:static flex  flex-col lg:flex-row  lg:flex gap-5 font-[Stylish] text-[20px] text-center">
              <li>Home</li>
              <li>About</li>
              <li>Event</li>
              <li>Register</li>
              <li>Schedule</li>
              <li>Contact</li>
            </ul>
          </div>
          <div
            className=" lg:hidden flex justify-end"
            onClick={() => {
              let e = document.getElementById("menu");
              e.classList.toggle("hidden");
            }}
          >
            <Menu></Menu>
          </div>
        </div>
        <div className="w-[90%] lg:w-[70%] mx-auto items-center grid grid-cols-1 gap-10">
          <div className="text-white font-bold text-center hidden lg:block">
            <p className="font-[Stylish] text-[22px] lg:text-[52px]">
              Department of Computer Science
            </p>
            <p className="font-[Stylish] text-[24px]">
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
          <div className="flex justify-center items-center flex-col gap-5 mt-24 lg:mt-0">
            <div>
              <p className="text-[50px] lg:text-[100px] text-center font-[Stylish] text-white">
                TECHX'24
              </p>
            </div>
            <div>
              <span></span>
              <Countdown
                key={0}
                date={Date.now() + 10000}
                intervalDelay={0}
                precision={3}
                autoStart={true}
                
                renderer={(props) => (
                  <>
                  {
                    
                  }
                    <div className="flex gap-5 flex-wrap">
                      <div className="flex items-center justify-center flex-col text-white border-2 rounded-lg py-2 px-3">
                        <p>{props.days}</p>
                        <p>Days</p>
                      </div>
                      <div className="flex items-center justify-center flex-col text-white border-2 rounded-lg py-2 px-3">
                        <p>{props.hours}</p>
                        <p>Hours</p>
                      </div>
                      <div className="flex items-center justify-center flex-col text-white border-2 rounded-lg py-2 px-3">
                        <p>{props.minutes}</p>
                        <p>Minutes</p>
                      </div>
                      <div className="flex items-center justify-center flex-col text-white border-2 rounded-lg py-2 px-3">
                        <p>{props.seconds}</p>
                        <p>Seconds</p>
                      </div>
                    </div>
                  </>
                )}
              ></Countdown>
            </div>
            <div className="flex justify-center">
              <a
                href="#_"
                class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
              >
                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                <span class="relative font-[Stylish] text-[22px]">
                  Register Now
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
