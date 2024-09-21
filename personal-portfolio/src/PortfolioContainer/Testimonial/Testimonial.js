import React, {useState} from 'react'
import './Testimonial.css';
import Header from '../Home/Header/Header';
import Footerpg from '../Footerpg/Footerpg'
import TestimonialData from './TestimonialData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faQuoteRight  } from '@fortawesome/free-solid-svg-icons';

const Testimonial = () =>{
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = TestimonialData[index];
  const checkNumber = (number) => {
    if (number > TestimonialData.length - 1){
      return 0;
    }
    if (number < 0){
      return TestimonialData.length - 1;
    }
    return number;
  }

const nextPerson = () =>{
  setIndex((index) => {
    let newIndex = index + 1;
    return checkNumber(newIndex);
  })
};
const prevPerson = () =>{
  setIndex((index) => {
    let newIndex = index - 1;
    return checkNumber(newIndex);
  })
};
const randomPerson = () =>{
  let randowNumber = Math.floor(Math.random() * TestimonialData.length);
  if(randowNumber === index){
    randowNumber = + 1;
  }
  setIndex(checkNumber(randowNumber));
};

  return (
    <div className="test">
      <Header/>
    <main>
      <section className="place">
        <div className="testimonial-header">
          <h1>Testimonial</h1>
          <p>People that i have worked With</p>
          <div className="underline"></div>
        </div>
        <div className="testimonial-background">
        <div className="testimonial ">
          <div className='img-container'>
            <img src={image} alt={name} className="person-img" />
            <span className='quote-icon'>
              <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
            </span>
          </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
          <div className='button-container'>
            <button className='prev-btn' onClick={prevPerson}>
              <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </button>
            <button className='next-btn' onClick={nextPerson}>
              <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
            </button>
          </div>
            <button className='random-btn' onClick={randomPerson}>
            Show Me
            </button>
        </div>
        </div>
      </section>
      <div className="testimonial-container">
      <div className="testimonial-parent">
        <img src={require("../../assets/Home/shape-bg.jpg")}alt=""  />
      </div>
      </div>
    </main>
      <Footerpg/>
    </div>
  )
};

export default Testimonial;