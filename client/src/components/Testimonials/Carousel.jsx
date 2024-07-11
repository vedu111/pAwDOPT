import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the styles for the carousel

function Carousell() {
    const slides = [
        {
          name: 'John Doe',
          text: 'Adopting my furry friend from pAwDOPT was the best decision I ever made. He brings so much joy and love into our home!',
          image: 'https://via.placeholder.com/800x400' // URL of the image for testimonial 1
        },
        {
          name: 'Jane Smith',
          text: 'We found our perfect match at pAwDOPT. Our adopted pet has become a cherished member of our family, bringing laughter and happiness every day.',
          image: 'https://via.placeholder.com/800x400' // URL of the image for testimonial 2
        },
        {
          name: 'Michael Brown',
          text: 'Our adopted pet from pAwDOPT has filled our lives with endless cuddles and unconditional love. We can’t imagine life without him!',
          image: 'https://via.placeholder.com/800x400' // URL of the image for testimonial 3
        },
      ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full md:w-2/3 border-zinc-600 border-2 rounded-lg p-6 mx-auto">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000} 
        stopOnHover={true} 
        onChange={handleSlideChange} 
      >
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      <div className="text-center mt-4">
        <h1 className='nuni text-center text-2xl font-bold clr-brown'>{slides[currentSlide].name}</h1>
        <p className="text-lg font-normal">{slides[currentSlide].text}</p>
      </div>
    </div>
  );
}

export default Carousell;
