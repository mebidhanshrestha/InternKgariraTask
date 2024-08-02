import React from "react";
import "../sass/Artist.scss";
import Breadcrums from "../components/Breadcrums";
import Bipul from "../components/Bipul";
import bipul from "../assets/bipul.png";

function Artist() {

  const artist = [
    {
      id: 1,
      image: bipul,
      review: '14 VERIFIED BOOKINGS',
      h5: 'Bipul Chettri is an Indian singer-songwriter who sings in the Nepali language and plays Himalayan folk music with a contemporary touch.His debut album,...',
      name: 'Bipul Chettri',
      verified: false,
      status: false

    },
    {
      id: 2,
      image: bipul,
      review: '14 VERIFIED BOOKINGS',
      h5: 'Bipul Chettri is an Indian singer-songwriter who sings in the Nepali language and plays Himalayan folk music with a contemporary touch.His debut album,...',
      name: 'Bipul Chettri',
      verified: true,
      status: true

    },
    {
      id: 3,
      image: bipul,
      review: '14 VERIFIED BOOKINGS',
      h5: 'Bipul Chettri is an Indian singer-songwriter who sings in the Nepali language and plays Himalayan folk music with a contemporary touch.His debut album,...',
      name: 'Bipul Chettri',
      verified: true,
      status: true

    },
    {
      id: 4,
      image: bipul,
      review: '14 VERIFIED BOOKINGS',
      h5: 'Bipul Chettri is an Indian singer-songwriter who sings in the Nepali language and plays Himalayan folk music with a contemporary touch.His debut album,...',
      name: 'Bipul Chettri',
      verified: true,
      status: true

    }
  ]
  return (
    <section className="Artist">
      <div className="container">
        <div className="artist-info">
          <div className="line"></div>
          <div className="first">
            <Breadcrums
              heading={"Featured Artist"}
              sideContent={"View All Artists"}
            />
            <div className="firstFrame">
              {artist.map((el)=> <Bipul
                image={el.image}
                review={el.review}
                h5={
                  el.h5
                }
                name={el.name}
                verified={el.verified}
                status={el.status}

                key={el.id}
              />)}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Artist;
