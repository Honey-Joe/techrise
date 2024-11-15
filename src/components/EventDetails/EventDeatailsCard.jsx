import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EventDeatailsCard = (props) => {
    const [EventData, setEventData] = useState();

    const fetchdata = async()=>{
        try{
            const res =await axios.get("https://backendtest-nu.vercel.app/event");
            console.log(res.data)
            setEventData(res.data)
        }
        catch(e){
            console.log(e);
        }
    }
    useEffect(()=>{
        fetchdata();
    },[])
    
  return (
    <div>
        <div className="flex flex-wrap justify-center py-8 px-4 bg-[#08123B]">
        <div className="w-full md:w-5/12 p-4 transition duration-500 ease-in-out transform hover:scale-105">
            <img src="Asset/brochure.jpeg" className="rounded-lg w-full h-64 sm:h-80 md:h-96 object-cover shadow-lg" alt="Event Brochure" />
        </div>
        <div className="w-full md:w-6/12 p-4 mt-6 md:mt-0 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-Fredoka pulse bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">{EventData}</h1>
            <h2 className="text-2xl sm:text-3xl mt-4 font-Fredoka">Debugging</h2>
            <p className="text-md sm:text-lg mt-6 leading-relaxed font-Fredoka">
            </p>
        </div>
    </div>

    <div className="my-16 text-center px-4">
        <h3 className="text-3xl sm:text-4xl font-bold font-Lugrasimo mb-12 pulse bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Meet the Coordinators</h3>
        <div className="flex flex-wrap justify-center">
            <div className="w-40 sm:w-48 lg:w-52 p-5 mx-3 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                <img src="Asset/p2.jpg" className="rounded-full border-2 border-white w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 mx-auto transition-all duration-300 ease-in-out hover:border-current" alt="Coordinator 1" />
                <p className="mt-4 text-center text-lg sm:text-xl font-semibold font-Fredoka">Kanagasundari.S</p>
                <p className="text-center text-sm font-Fredoka">7305716958</p>
            </div>
            <div className="w-40 sm:w-48 lg:w-52 p-5 mx-3 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                <img src="Asset/p3.jpg" className="rounded-full border-2 border-white w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 mx-auto transition-all duration-300 ease-in-out hover:border-current" alt="Coordinator 2" />
                <p className="mt-4 text-center text-lg sm:text-xl font-semibold font-Fredoka">Kaveeya Dharshni.D</p>
                <p className="text-center text-sm font-Fredoka">9566003770</p>
            </div>
            <div className="w-40 sm:w-48 lg:w-52 p-5 mx-3 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                <img src="Asset/pp2.jpg" className="rounded-full border-2 border-white w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 mx-auto transition-all duration-300 ease-in-out hover:border-current" alt="Coordinator 3" />
                <p className="mt-4 text-center text-lg sm:text-xl font-semibold font-Fredoka">Janani.K</p>
                <p className="text-center text-sm font-Fredoka">6379420842</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default EventDeatailsCard