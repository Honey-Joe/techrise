import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EventDetailsPage from './EventDetailsPage';

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
            <img src={data.event?.eventurl} class="rounded-lg w-full h-64 sm:h-80 md:h-96 object-cover shadow-lg" alt="Event Brochure" />
        </div>
        <div class="w-full md:w-6/12 p-4 mt-6 md:mt-0 text-center md:text-left">
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold font-Fredoka pulse bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">{data.event?.eventname}</h1>
            <h2 class="text-2xl sm:text-3xl mt-4 font-Fredoka">Debugging</h2>
            <p class="text-md sm:text-lg mt-6 leading-relaxed font-Fredoka">
                {data.event?.eventdesc}
            </p>
        </div>
        <div>
          <p>Rules</p>
          <div>
            <ul>
              <li>{data.event?.rules?.r1}</li>
            </ul>
          </div>
        </div>
    </div>
    </div>
  )
}

export default EventDetails
