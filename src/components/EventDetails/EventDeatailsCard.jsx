import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EventDeatailsCard = (props) => {
   
    const [EventData, setEventData] = useState();

    const fetchdata = async()=>{
        try{
            const res =await axios.get("https://backendtest-nu.vercel.app/event");
            console.log(res.data.eventid)
            setEventData(res.data)
        }
        catch(e){
            console.log(e);
        }

    }
    fetchdata();
  return (
    <div>
        <div class="flex flex-wrap justify-center py-8 px-4 bg-[#08123B]">
        <div class="w-full md:w-5/12 p-4 transition duration-500 ease-in-out transform hover:scale-105">
            <img src="Asset/brochure.jpeg" class="rounded-lg w-full h-64 sm:h-80 md:h-96 object-cover shadow-lg" alt="Event Brochure" />
        </div>
        <div class="w-full md:w-6/12 p-4 mt-6 md:mt-0 text-center md:text-left">
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold font-Fredoka pulse bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">{props.eventname}</h1>
            <h2 class="text-2xl sm:text-3xl mt-4 font-Fredoka">Debugging</h2>
            <p class="text-md sm:text-lg mt-6 leading-relaxed font-Fredoka">
                {props.eventdesc}
            </p>
        </div>
    </div>

    <div class="my-16 text-center px-4">
        <h3 class="text-3xl sm:text-4xl font-bold font-Lugrasimo mb-12 pulse bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Meet the Coordinators</h3>
        <div class="flex flex-wrap justify-center">
            <div class="w-40 sm:w-48 lg:w-52 p-5 mx-3 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                <img src="Asset/p2.jpg" class="rounded-full border-2 border-white w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 mx-auto transition-all duration-300 ease-in-out hover:border-current" alt="Coordinator 1" />
                <p class="mt-4 text-center text-lg sm:text-xl font-semibold font-Fredoka">Kanagasundari.S</p>
                <p class="text-center text-sm font-Fredoka">7305716958</p>
            </div>
            <div class="w-40 sm:w-48 lg:w-52 p-5 mx-3 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                <img src="Asset/p3.jpg" class="rounded-full border-2 border-white w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 mx-auto transition-all duration-300 ease-in-out hover:border-current" alt="Coordinator 2" />
                <p class="mt-4 text-center text-lg sm:text-xl font-semibold font-Fredoka">Kaveeya Dharshni.D</p>
                <p class="text-center text-sm font-Fredoka">9566003770</p>
            </div>
            <div class="w-40 sm:w-48 lg:w-52 p-5 mx-3 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                <img src="Asset/pp2.jpg" class="rounded-full border-2 border-white w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 mx-auto transition-all duration-300 ease-in-out hover:border-current" alt="Coordinator 3" />
                <p class="mt-4 text-center text-lg sm:text-xl font-semibold font-Fredoka">Janani.K</p>
                <p class="text-center text-sm font-Fredoka">6379420842</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default EventDeatailsCard