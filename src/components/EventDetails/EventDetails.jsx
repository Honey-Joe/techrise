import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EventDetailsPage from './EventDetailsPage';

const EventDetails = () => {

    const datap = useParams();
    console.log(datap.eventid);

    const [data,setData] = useState([{}]);

  const fetchdata = async()=>{
    const res = await axios.get("https://techx-24backend.vercel.app/event/" + datap.eventid);
    setData(res.data)
    console.log(res.data);
    console.log(data);
  }
 
  useEffect(()=>{
    fetchdata();
  },[])
  return (
    <div>
        <p>event Details</p>
        <p>{data.map((e)=>{
          return(
            <>
            <p>{e.eventid}</p>
            </>
          )
        })}</p>
    </div>
  )
}

export default EventDetails
