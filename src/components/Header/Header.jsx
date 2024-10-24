import { useEffect, useState } from "react";
import VideoBackground from "./VideoBackground";
import { Menu } from "lucide-react";
import CountdownTimer from "../Contdown/CountDown";
import { Button, Paragraph, SideSheet } from "evergreen-ui";
const Header = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div className="">
        <div className="max-w-[100%] relative z-10 bg-[url(https://ik.imagekit.io/HoneyJoe/techx/104962.jpg?updatedAt=1729784638022)] bg-cover bg-no-repeat h-screen" id="main">
          <div className="w-[85%] lg:w-[100%] left-7 lg:left-0 lg:top-0 top-10 bg-white lg:rounded-md  mx-auto px-5 rounded-full lg:px-5 grid grid-cols-2 lg:grid-cols-2 py-4 lg:py-2 shadow-lg items-center lg:bg-[#08123B]  text-black lg:text-[#6f83df] fixed">
            <div>
              <p className="font-[Stylish] text-[20px] lg:text-[24px]">
                Techx 24
              </p>
            </div>
            <div
              className=" py-5 hidden lg:flex lg:justify-end lg:bg-transparent bg-white"
            >
              <ul className=" lg:static  hidden  flex-col lg:flex-row  lg:flex gap-5 font-[Stylish] text-[20px] text-center">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#event">Event</a>
                </li>
                <li>
                  <a href="#schedule">Schedule</a>
                </li>
                <li>
                  <a href="#venue">Venue</a>
                </li>
                <li>Register</li>
              </ul>
            </div>
            <div className="flex justify-end lg:hidden ">
              <SideSheet
                isShown={isShown}
                onCloseComplete={() => setIsShown(false)}
                width={270}
                className="bg-black"
                shouldCloseOnOverlayClick={true}
                onBeforeClose={false}
                isClosing={true}
                
              >
                <Paragraph height="100vh" backgroundColor="#08123B">
                <ul className=" flex   flex-col  gap-5 font-[Stylish] text-[20px] text-center py-5 text-white">
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#event">Event</a>
                  </li>
                  <li>
                    <a href="#schedule">Schedule</a>
                  </li>
                  <li>
                    <a href="#venue">Venue</a>
                  </li>
                  <li>Register</li>
                </ul>

                </Paragraph>
                
              </SideSheet>
              <Button
                onClick={() => {
                  setIsShown(true);
                }}
                border={0}
              >
                <Menu></Menu>
              </Button>
            </div>
          </div>
          <div className="w-[95%] lg:w-[70%] justify-center  mx-auto gap-10 lg:gap-0 items-center grid grid-cols-1 lg:py-[100px] py-[150px]">
            <div className="text-white font-bold text-center">
              <p className="font-[Fredoka] text-[26px] lg:text-[52px] text-center font-bold text-[#fbe072]">
                DEPARTMENT OF COMPUTER SCIENCE
              </p>

              <p className="font-[Poppins] font-medium text-[18px] lg:text-[28px]">
                St. Joseph's College (Autonomous)
              </p>
              <div className="hidden lg:block">
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
              <p className="font-[Stylish] text-[26px] mt-3 text-[#fbe072]">
                Cordiallly invites you
              </p>
            </div>
            <div className="flex justify-center items-center flex-col gap-5  lg:mt-0">
              <div>
                <p className="text-[50px] lg:text-[100px] text-center font-[Stylish] text-white">
                  TECHX'24
                </p>
                <p className="text-white font-[Poppins] text-center">
                  A State Level Intercollegiate Technical Symposium
                </p>
              </div>
              <div>
                <span></span>
                <CountdownTimer></CountdownTimer>
              </div>
              <div className="flex justify-center mt-10  lg:mt-0 lg:pt-0">
                <a
                  href="#_"
                  className="relative border inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
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
