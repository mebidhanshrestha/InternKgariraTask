import React from 'react'
import Category from '../components/Category'
import "../sass/Explore.scss"

function Explore() {
  return (
    <section className='Explore'>
        <div className='container'>
            <div className='explore-info'>
                <h1>Explore More Categories</h1>
                <div className='inner'>
                    <Category text={'Live'}/>
                    <Category text={'Festival'}/>
                    <Category text={'Dance'}/>
                    <Category text={'Acoustic'}/>
                    <Category text={'Theatre'}/>
                    <Category text={'Music'}/>
                    <Category text={'Dj Night'}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Explore