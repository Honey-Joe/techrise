import React from 'react'
import EventDeatailsCard from './EventDeatailsCard'
import EventData from '../../API/EventData'
import { useParams } from 'react-router-dom'


const EventDetails = () => {
    
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