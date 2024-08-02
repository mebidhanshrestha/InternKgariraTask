import React from 'react'
import Breadcrums from '../components/Breadcrums'
import Featured from '../components/Featured'
import purplehaze from '../assets/purplehaze.png'
import "../sass/Venue.scss"


const featured = [
  {
    id: 1,
    image: purplehaze,
    heading: 'Purple Haze Rock Bar',
    text: '10'
  },
  {
    id: 2,
    image: purplehaze,
    heading: 'Purple Haze Rock Bar',
    text: '10'
  },
  {
    id: 3,
    image: purplehaze,
    heading: 'Purple Haze Rock Bar',
    text: '10'
  },
  {
    id: 4,
    image: purplehaze,
    heading: 'Purple Haze Rock Bar',
    text: '10'
  }
]

function Venue() {
  return (
    <section className='Venue'>
        <div className='container'>
            <div className="venue-info">
                <Breadcrums heading={'Featured Venue'} sideContent= {'View All Venue'} />
                <div className='features'>
                  {featured.map((el)=>  <Featured key={el.id} image={el.image} heading={el.heading} text={el.text} />)}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Venue