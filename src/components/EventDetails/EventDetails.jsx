import React, { useState } from 'react'
import EventDeatailsCard from './EventDeatailsCard'
import { useEffect } from 'react';
import axios from 'axios';


const EventDetails = () => {
    const [EventData, setEventData] = useState();

    const fetchdata = async()=>{
        try{
            const res =await axios.get("https://backendtest-nu.vercel.app/event");
            console.log(res.data.data)
            setEventData(res.data.data)
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
        <div>
            <p>{EventData.eventid}</p>
        </div>
    </div>
  )
}

export default EventDetails