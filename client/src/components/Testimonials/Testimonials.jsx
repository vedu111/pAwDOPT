import React from 'react';
import Carousell from './Carousel';
import "./Testimonials.css";
const TestimonialsSection = () => {
  return (
    <div className="testi bg-lgrn">
      <h2 className="nuni text-center text-5xl font-extrabold">Happy Adoptions</h2>
      <p className="intro nuni flex justify-center items-centre">Discover what our adopters have to say about their pAwDOPT experiences!</p>
      <Carousell />
    </div>
  );
};

export default TestimonialsSection;
