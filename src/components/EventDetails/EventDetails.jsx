import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./EventDetails.css"

const EventDetails = () => {

    const datap = useParams();

    const [data,setData] = useState([]);
    

  const fetchdata = async()=>{
    const res = await axios.get("https://techx-24backend.vercel.app/event/" + datap.id);
    setData(res.data)
    console.log(res.data);
  }
  console.log(data.event)

 
  useEffect(()=>{
    fetchdata();
  },[])
  return (
    <div>
       <div class="flex flex-wrap justify-center py-8 px-4">
        <div class="w-full md:w-5/12 p-4 transition duration-500 ease-in-out transform hover:scale-105">
            <img src={data.event?.eventurl} class="rounded-lg w-full h-64 sm:h-80 md:h-96 object-cover shadow-lg drop-shadow-2xl" alt="Event Brochure" />
        </div>
        <div class="w-full md:w-6/12 p-4 mt-6 md:mt-0 text-center md:text-left">
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold font-Fredoka pulse bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 bounce-in">{data.event?.eventname}</h1>
            <p class="text-md sm:text-lg mt-6 leading-relaxed bounce-in" style="animation-delay: 0.4s;">
            {data.event?.eventdesc}
            </p>
        </div>
    </div>

    <div class="my-16 text-center px-4">
        <h3 class="text-3xl sm:text-4xl font-bold font-Lugrasimo mb-12 pulse bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Rules</h3>
        <div class="rules-section">
            <div class="prelims mb-12">
                <h4 class="text-3xl font-bold mb-6 text-pink-400 section-heading">PRELIMS</h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="rule rule-1 bg-gradient-to-r from-purple-500 to-red-500 text-white text-center py-4 px-6 rounded-lg shadow-lg hover-effect">
                        <p class="text-lg font-semibold">{data.event?.rules?.r1}</p>
                    </div>
                    <div class="rule rule-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white text-center py-4 px-6 rounded-lg shadow-lg hover-effect">
                        <p class="text-lg font-semibold">{data.event?.rules?.r2}</p>
                    </div>
                    <div class="rule rule-3 bg-gradient-to-r from-green-500 to-yellow-500 text-white text-center py-4 px-6 rounded-lg shadow-lg hover-effect">
                        <p class="text-lg font-semibold">{data.event?.rules?.r3}</p>
                    </div>
                </div>
            </div>

            <div class="mains mb-12">
                <h4 class="text-3xl font-bold mb-6 text-pink-400 section-heading">MAINS</h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="rule rule-1 bg-gradient-to-r from-purple-500 to-red-500 text-white text-center py-4 px-6 rounded-lg shadow-lg hover-effect">
                        <p class="text-lg font-semibold">{data.event?.rules?.r4}</p>
                    </div>
                    <div class="rule rule-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white text-center py-4 px-6 rounded-lg shadow-lg hover-effect">
                        <p class="text-lg font-semibold">{data.event?.rules?.r5}</p>
                    </div>
                    <div class="rule rule-3 bg-gradient-to-r from-green-500 to-yellow-500 text-white text-center py-4 px-6 rounded-lg shadow-lg hover-effect">
                        <p class="text-lg font-semibold">{data.event?.rules?.r6}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default EventDetails
