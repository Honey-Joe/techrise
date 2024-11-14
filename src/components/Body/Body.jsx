import React, { useEffect } from "react";
import About from "../About/About";
import Eventlist from "../Eventslist/Eventlist";
import NontechEvent from "../NontechEvent/NontechEvent";
import Schedule from "../Schedule/Schedule";
import Map from "../Map/Map";
import Aos from "aos";
import "aos/dist/aos.css"
import Faq from "../Faq/Faq";

const Body = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
      <div>
        <About></About>
      </div>
      <div>
        <Eventlist></Eventlist>
      </div>
      <div>
        <NontechEvent></NontechEvent>
      </div>
      <div>
        <Schedule></Schedule>
      </div>
      <div>
        <Faq></Faq>
      </div>
      <div>
        <Map></Map>
      </div>
    </>
  );
};

export default Body;
