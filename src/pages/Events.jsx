import React from 'react'
import Breadcrums from '../components/Breadcrums'
import Event from "../components/Event"
import recent from "../assets/recent.png"
import "../sass/Events.scss"

function Events() {
  const event = [1, 2, 3,4,5,6,7,8];
  return (
    <section className='Events'>
        <div className='container'>
            <div className="Events-info">
                <Breadcrums heading={'Events Near'} sideContent={'View All Events'} extra={true}/>
                <div className='secondContainer'>
                  {event.map((el)=> <Event key={el} image={recent}/>)}
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Events