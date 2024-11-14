import React, { useState } from 'react'
import axios from 'axios'


const EventDetails = () => {
    const [Eventdata, setEventData] = useState();

    const fetechData = async() =>{
        const res = await axios.get("https://backendtest-nu.vercel.app/event");
        setEventData(res.data);
        console.log(res.data);

    }
    useEffect(()=>{
        fetechData();
    },[]);
  return (
    <div>
        <div>
           {Eventdata.eventid}
        </div>
    </div>
  )
}

export default EventDetails