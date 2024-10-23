import { ChevronRight } from "lucide-react";
import NontechEventCard from "./NontechEventCard";
import { NonTechEventlistdata } from "../../API/NonTechEventlistdata";
const NontechEvent = () => {
  return (
    <>
      <div className="max-w-[100%] bg-[#08123bdf]">
        <div className="w-[80%] mx-auto grid grid-cols-1 py-10 gap-5">
          
          <div className="flex justify-center">
            <p className="font-[Poppins] text-[24px]  md:text-[32px] lg:text-[40px] text-white font-semibold">Non Technical Events</p>
          </div>
          <div className="h-[3px] bg-[#118AEF] w-[90%] lg:w-[40%] mx-auto my-5 lg:my-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                NonTechEventlistdata.map((e)=>{
                    return(
                        <NontechEventCard
                            imgurl = {e.imgurl}
                            tag = {e.tag}
                            designation = {e.designation}
                            date = {e.date}
                            authorimg = {e.authorimg}
                            blogtitle = {e.blogtitle}
                            authorname= {e.authorname}
                        >


                        </NontechEventCard>
                    )
                })
            }
             
          </div>
        </div>
      </div>
    </>
  );
};

export default NontechEvent;
