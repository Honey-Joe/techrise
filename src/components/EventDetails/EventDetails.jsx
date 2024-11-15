import React, { useState } from 'react'
import EventDeatailsCard from './EventDeatailsCard'
import { useEffect } from 'react';
import axios from 'axios';


const EventDetails = () => {
    const [data,setData] = useState([]);

    const fetchdata = async()=>{
        try{
            const res =await axios.get("https://backendtest-nu.vercel.app/event");
            console.log(res.data)
            setData(res.data);
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
            {
                data.map((e)=>{
                    return(
                        <>
                            <EventDeatailsCard
                                eventname={e.eventname}
                                eventdesc={e.eventdesc}
                            ></EventDeatailsCard>
                        </>
                    )
                })
            }
        </div>
    </div>
  )
}

export default EventDetails