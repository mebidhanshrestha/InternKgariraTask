import React from 'react'
import Recent from '../components/Recent'
import recent from "../assets/recent.png"
import "../sass/RecentlyViewed.scss"

function RecentlyViewed() {
  return (
    <section className="RecentlyViewed">
        <div className="container">
            <div className="recently-info">
                <div className='line'></div>
                <div className='first'>
                    <h2>Recentaly Viewed</h2>
                    <div className='second'>
                        <Recent />
                        <Recent />
                        <Recent />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default RecentlyViewed