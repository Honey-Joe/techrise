import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EventDeatailsCard = (props) => {
    const [data,setData] = useState([]);
    const para = useParams();
    console.log(para)
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
    },[data])
    
  return (
    <div>
       {data.eventname}
    </div>
  )
}

export default EventDeatailsCard