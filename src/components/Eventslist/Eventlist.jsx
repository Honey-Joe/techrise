import { ChevronRight } from "lucide-react";
import { Eventlistdata } from "../../API/Eventlistdata";
import Eventlistcard from "./EventlistCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import './styles.css';
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";


const Eventlist = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
      <div className="max-w-[100%] bg-[#081F4D]" id="event">
        <div className="w-[100%] mx-auto grid grid-cols-1 py-10 gap-5" data-aos="fade-up-right">
          <div className="flex justify-center">
            <div className="">
              <h5 class="flex  items-center justify-center gap-3">
                <p className="font-[Fredoka] text-[32px]  md:text-[22px] lg:text-[24px] font-semibold text-white ">
                  Events
                </p>
              </h5>
            </div>
          </div>
          <div className="flex justify-center">
            <p className="font-[Fredoka] text-[24px]  md:text-[32px] lg:text-[40px] text-white font-semibold">
              Technical Events
            </p>
          </div>
          <div className="h-[3px] bg-[#118AEF] w-[90%] lg:w-[40%] mx-auto my-5 lg:my-5"></div>
          <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"2"}
              coverflowEffect={{
                rotate: 10,
                stretch: 10,
                depth: 100,
                modifier: 3,
                slideShadows: false,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            >
              
                {Eventlistdata.map((e) => {
                  return (
                    <SwiperSlide>
                    <Eventlistcard
                      imgurl={e.imgurl}
                      tag={e.tag}
                      designation={e.designation}
                      date={e.date}
                      authorimg={e.authorimg}
                      blogtitle={e.blogtitle}
                      authorname={e.authorname}
                    ></Eventlistcard>
                    </SwiperSlide>
                  );
                })}
            
            </Swiper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Eventlist;
