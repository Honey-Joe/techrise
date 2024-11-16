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
 
  useEffect(()=>{
    fetchdata();
  },[])
  return (
    <div>
        <p>event Details</p>
        <p></p>
    </div>
  )
}

export default EventDetails
