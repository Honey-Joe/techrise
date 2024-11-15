import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EventDetails = () => {

    const data = useParams();
    console.log(data.eventid);

    const [Eventdata,setEventData] = useState([]);

    const fetchdata = async()=>{
      const res = await axios.get("https://backendtest-nu.vercel.app/event/" + data.eventid);
      setEventData(res.data)
      console.log(res.data);
    }
   
    useEffect(()=>{
      fetchdata();
    },[])
  return (
    <div>
        <p>event Details</p>
    </div>
  )
}

export default EventDetails
