import React from 'react';
import './Home.css'
import Header from './Header/Header'
import Profile from "./Profile/Profile";
import Footerpg from "../Footerpg/Footerpg"


export default function Home() {
  return(
  <div className="home-container">
      <Header/>
      <Profile/>
      <Footerpg/>
  </div>
  );
}

