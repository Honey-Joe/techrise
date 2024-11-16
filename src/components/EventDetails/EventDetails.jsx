import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EventDetails = () => {

    const data = useParams();
    console.log(data.eventid);

    const [Eventdata,setEventData] = useState([]);

    const fetchdata = async()=>{
      const res = await axios.get("https://backendtest-nu.vercel.app/event/");
      setEventData(res.data)
      console.log(res.data.event);
    }
   
    useEffect(()=>{
      fetchdata();
    },[])
  return (
    <div>
        <p>event Details</p>
        <p>{Eventdata.event.eventid}</p>
    </div>
  )
}

export default EventDetails
