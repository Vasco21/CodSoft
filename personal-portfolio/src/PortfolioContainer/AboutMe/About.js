

import React from 'react';
import './About.css';
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import Footerog from '../Footerpg/Footerpg'
import Header from '../Home/Header/Header'
import Portfolio from '../../assets/Home/me.png';

export default function About() {
  return (
    <div>
    <div className="about-main">
      <Header/>
    <div className="about">
      <div className="about-me">
       <h1>About Me</h1>
       <p>Why Choose Me?</p>
       <div className="underline"></div>
      </div>
        <div className="about-container">
            <div className="about-img"> 
              < img src={Portfolio} alt="" />
            </div> 
            <div className="flex">
            <p>I am a hard-working recent college graduate from Project Codex and ExploreAI Academy.  
                I had the privilege of working for Institute of Mine Seismology in a seismic waves 
                ,control and conduct seismic tests to find and record sound waves from energy sources under 
                the earth's surface role, for 8 years.
                I learned valuable professional skills such as full stack software developer & Junior Data Scientist .
                In both my academic and professional life, I have been consistently praised as quality-oriented by my professors and peers. 
                Whether working on academic, extracurricular, or professional projects, 
                I apply proven communication, creative thinking and language skills.
              </p>
              <h3>Here are a Few and highlights</h3>
              <p>3+ year exprience in Software Developement</p>
              <p>JavaScript Developer</p>
              <p>Machine Learning</p>
              <p>MySQL</p>
              <p>Python</p>
            </div> 
        </div>
    </div>
    <div className="flexCalend">
      <div className="project-heading">
      <h1>
        Days I <strong className="orange">Code</strong>
      </h1>
      </div>
    <Row  className="project-heading" style={{ justifyContent: "center", paddingBottom: "10px"}}>
      <GitHubCalendar
        username="Vasco21"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
      />
    </Row>
    </div>
  </div>
    <Footerog/>
  </div>
  )
}