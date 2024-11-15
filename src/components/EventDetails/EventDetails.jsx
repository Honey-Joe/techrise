import React from 'react'
import EventDeatailsCard from './EventDeatailsCard'
import { useParams } from 'react-router-dom'


const EventDetails = () => {
    const [EventData, setEventData] = useState();

    const fetchdata = async()=>{
        try{
            const res =await axios.get("https://backendtest-nu.vercel.app/event");
            console.log(res.data)
            setEventData(res.data)
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
                EventData.map((e)=>{
                    return(
                        <EventDeatailsCard
                            eventname = {e.eventname}
                            eventdesc = {e.eventdesc}
                        ></EventDeatailsCard>
                    )
                })
            }
        </div>
    </div>
  )
}

export default EventDetails