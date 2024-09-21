import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'
// import '@fortawesome/fontawesome-free/js/all.js';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 575px}) {
    max-width: 400px;
  }

  @media (min-width:767px}) {
    max-width: 540px;
  }

  @media (min-width: 767px}) {
    max-width: 720px;
  }

  @media (min-width: 991px) {
    max-width: 960px;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};

  .Pronames{
  font-weight: bold;
  color: #4e4e4e;
  font-family: 'Raleway', sans-serif;
    span{
      color:#248eff;
    }
  }

  .aboutImages {
    width: 90%;
    max-height: 500px;
    overflow: hidden;
    border-radius: 10%;
    
    img {
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  .about-description {
    font-size: 0.9rem;
    color: #6f6f6f;
  }
  .take{
      background-color:black;
  }
`;

export const Section = styled.section`
.rows{
  color:green;
  font-size:15px;
}
// service
.service-box {
  padding: 2rem;
  border: 1px solid #eef1f5;
  margin-bottom: 1rem;
  background: white;

  .service-icon {
    font-size: 2rem;
    color: #248eff;
  }

  .service-body {
    .service-title {
      font-size: 1.1rem;
      margin-bottom: 1.2rem;
    }
    .service-description {
      font-size: 0.9rem;
      // color: #6f6f6f;
    }
  }
}

//blog
 
  .card {
    box-shadow: 0 10px 30px 0 rgba(50, 50, 50, 0.16);
    border: none;
    .card-title {
      font-size: 1rem;
      font-weight: bolder;
      color: #4e4e4e;
      text-transform: uppercase;
    }
    .card-text {
      font-size: 0.9rem;
      color: #6f6f6f;
    }
  }
// facts
.facts-container {
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #003267;
    opacity: 0.8;
  }
  .facts-icon {
    font-size: 2.5rem;
    color: #248eff;
  }
  .facts-counter {
    font-size: 2.5rem;
    font-weight: 700;
  }
}
@keyframes scrolled {
  0% {
    top: -70px;
  }
  100% {
    top: 0;
  }
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index:999;
  @media (min-width: 768px) {
    position: absolute;
  }
  .navbar-brand {
    font-weight: bold;
    letter-spacing: 2px;
    color: #4e4e4e;
    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
    i {
      color: #248eff;
      font-size: 0.5rem;
    }
  }
  .navbar {
    box-shadow: 0px 2px 6px rgba(43, 73, 111, 0.2);
    &.scrolled {
      @media (min-width: 768px) {
        position: fixed;
        left: 0;
        right: 0;
        animation: scrolled 0.3s ease forwards;
      }
    }
  }
  .nav-link {
    text-transform: uppercase;
    font-weight: 700;
    color: #4e4e4e !important;
    font-size: 0.85rem;
    &:hover {
      color: darken(#248eff, 6%) !important;
    }
    &.active {
      color: lighten(#248eff, 5%) !important;
    }
    @media (min-width: 768px) {
      padding: 1rem 1rem;
    }
  }
  .top-bar {
    // background-color: #2f4e72;
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
  }
  
  .nav-icon {
    width: 30px;
    height: 25px;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    span {
      display: block;
      position: absolute;
      height: 3px;
      width: 100%;
      background: #4e4e4e;
      border-radius: 9px;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.25s ease-in-out;
      -moz-transition: 0.25s ease-in-out;
      -o-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;
      &:nth-child(1) {
        top: 0px;
      }
      &:nth-child(2) {
        top: 9px;
      }
      &:nth-child(3) {
        top: 18px;
      }
    }
    &.open {
      span {
        &:nth-child(1) {
          top: 9px;
          -webkit-transform: rotate(135deg);
          -moz-transform: rotate(135deg);
          -o-transform: rotate(135deg);
          transform: rotate(135deg);
        }
        &:nth-child(2) {
          opacity: 0;
          left: -60px;
        }
        &:nth-child(3) {
          top: 9px;
          -webkit-transform: rotate(-135deg);
          -moz-transform: rotate(-135deg);
          -o-transform: rotate(-135deg);
          transform: rotate(-135deg);
        }
      }
    }
  }
}
// footer
footer {
  background: #292f35;
  .footer-title {
    position: relative;
    margin-bottom: 2rem;
    &:after {
      content: '';
      display: inline-block;
      position: absolute;
      width: 50px;
      height: 2px;
      background: #orangered;
      top: 30px;
    }
    .footer-content p{
      color: #f8f9fa !important;
    }
  }
  .bottom-footer {
    background-color: #181d21;
    color: #F57F17;
  }
  .quick-links {
    list-style-type: none;
    padding: 0;
    margin: 0;

    a {
      text-decoration: none;
      font-size: 0.9rem;
      display: inline-block;
      padding: 0.3rem 0;
      color: #f8f9fa !important;
      &:hover {
        color: lighten(#f8f9fa, 20%) !important;
      }
    }
  }
}
`;
export const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &:hover {
    background-color: black;
  }
`;
