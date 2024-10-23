import { ArrowRight, ChevronRight, Plus } from "lucide-react";

const Eventlistcard = (props) => {
  return (
    <>
      <div className="">
        <div className="overflow-hidden group relative  ">
          <img
            src={props.imgurl}
            alt="blog image"
            className="w-[100%] h-[500px]  object-cover z-20 rounded-t-xl"
          />
        </div>
        <div className="rounded-xl flex flex-col shadow-lg  transition w-[90%] mx-auto -translate-y-[120px] bg-white">
          <div className="flex flex-col p-5 gap-5">
            
            <div>
              <p className="font-[Poppins] text-[20px] md:text-[22px] lg:text-[24px] text-[#2a254d] hover:text-[#4f5de4] font-medium">
                {props.blogtitle}
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                
                <div>
                  <div>
                    <p className="font-[Poppins] line-clamp-2 text-[16px] font-medium text-[#2a254d] hover:text-[#4f5de4]">
                      {props.authorname}
                    </p>
                    
                  </div>
                </div>
              </div>
              <div>
                <a
                  href="#_"
                  class="relative inline-flex items-center justify-center px-5 py-5 overflow-hidden font-medium transition duration-300 ease-out border-2 border-[#F57104] rounded-full shadow-md group"
                >
                  <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#F57104] group-hover:translate-x-0 ease">
                    <ArrowRight></ArrowRight>
                  </span>
                  <span class="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">
                    <ArrowRight></ArrowRight>
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
