import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';

const data = [
  {
   image: require('../images/banner-1.jpeg'), 
   caption:"Image 1",
   description:"Description Here"
  },
  {
    image:require('../images/banner-7.jpeg'), 
    caption:"Image 2",
    description:"Description Here"
   },
   {
    image:require('../images/banner-9.jpeg'), 
    caption:"Image 3",
    description:"Description Here"
   } 
]

function BootstrapCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item key={i}>        
        <img
          className="d-block w-100"
          src={slide.image}
          alt="slider image"
        />
        <Carousel.Caption>
          <h3>{slide.caption}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel>
  );
}
export default BootstrapCarousel; 