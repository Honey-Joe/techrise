import { ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import './styles.css';
import NontechEventCard from "./NontechEventCard";
import { NonTechEventlistdata } from "../../API/NonTechEventlistdata";
import "aos/dist/aos.css"
import { useEffect } from "react";
import Aos from "aos";



const Eventlist = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
      <div className="max-w-[100%] bg-[#081F4D] overflow-hidden" id="event">
        <div className="w-[95%] mx-auto grid grid-cols-1 py-10 gap-5" data-aos="fade-up-left" data-aos-delay="300">
          
          <div className="flex justify-center">
            <p className="font-[Fredoka] text-[24px]  md:text-[32px] lg:text-[40px] text-white font-semibold">
              Non Technical Events
            </p>
          </div>
          <div className="h-[3px] bg-[#118AEF] w-[90%] lg:w-[40%] mx-auto my-5 lg:my-5"></div>
          <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"2"}
              coverflowEffect={{
                rotate: 15,
                stretch: 0,
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
              
                {NonTechEventlistdata.map((e) => {
                  return (
                    <SwiperSlide>
                    <NontechEventCard
                      imgurl={e.imgurl}
                      tag={e.tag}
                      designation={e.designation}
                      date={e.date}
                      authorimg={e.authorimg}
                      blogtitle={e.blogtitle}
                      authorname={e.authorname}
                    ></NontechEventCard>
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
