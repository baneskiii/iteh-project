import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    'https://www.sportvision.rs/files/images/2023/2/14/SV%20nova%20kolekcija%20img%20JAN23%201200x526.jpg',
    'https://www.sportvision.rs/files/images/2023/1/20/SV-ski-desktop%281%29.jpg',
    'https://www.sportvision.rs/files/images/2022/11/30/SV-winter-desktop.jpg'
  ];

  const Pocetna = () => {

    return (

      <div> 
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>

            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>

            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>

            </div>
          </div>
        </Slide>
      </div>
    )
};

 export default Pocetna;