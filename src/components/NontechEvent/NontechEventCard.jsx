import { ArrowRight, ChevronRight, Plus } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Eventlistcard = (props) => {
  return (
    <>
      <div className="hover:-translate-y-3 transition h-fit shadow-lg relative">
        <div className="overflow-hidden group">
        <LazyLoadImage
            alt={"image non tech event"}
            effect="blur"
            wrapperProps={{
              style: { transitionDelay: "1s" },
            }}
            src={props.imgurl}
            className="w-[100%] h-[250px]  object-cover z-20 rounded-xl"
          />
        </div>
        <div className="rounded-xl flex flex-col shadow-lg  transition w-[90%] mx-auto absolute -bottom-4 left-[5%]  bg-white">
          <div className="flex flex-col p-5 gap-5 items-center">
            
            <div>
              <p className="font-[Fredoka] text-[20px] md:text-[22px] lg:text-[24px] text-[#2a254d] hover:text-[#4f5de4] font-medium">
                {props.blogtitle}
              </p>
            </div>
            <div className="flex justify-center">
              
              <div>
                <a
                  href="#_"
                  class="relative inline-flex items-center justify-center px-16 py-5 overflow-hidden font-medium transition duration-300 ease-out border-2 border-[#081E4C] rounded-full shadow-md group"
                >
                  <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#081E4C] group-hover:translate-x-0 ease">
                    <ArrowRight></ArrowRight>
                  </span>
                  <span class="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease text-[12px]">
                    Rules And Regulation
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

export default Eventlistcard;
