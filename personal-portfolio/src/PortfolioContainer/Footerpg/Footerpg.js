import React from "react";
import { Section } from "./global"
import Link from "./Links"
 
const Footer = () => {
  return (
    <Section>
    <footer className='footer'>
      <div className='container text-light pt-5'>
        <div className='row'>
          <div className='col-sm-6 col-md-6 col-lg-4 mb-5'>
            <div className='footer-title'>
              <h6>About</h6>
            </div>
            <div className='footer-content'>
              <p>
                <small>
                College graduate from Project Codex and ExploreAI Academy. 
                </small>
              </p>
                <a href='https://www.linkedin.com/in/vasco-eti-154259193/' className='text-light'>
              <button className='btn btn-sm btn-primary rounded-0'>
                Learn more
              </button>
              </a>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-2 mb-5'>
            <div className='footer-title'>
              <h6>Social Media</h6>
            </div>
            <div className='footer-content'>
              <ul className='list-group quick-links'>
                <li>
                  <Link target='home' offset={-120}>
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link target='about'>
                    Twitte
                  </Link>
                </li>
                <li>
                  <Link target='services'>
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link target='blog'>
                    GitHub
                
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
            <div className='footer-title'>
              <h6>Skills Update</h6>
            </div>
            <p><small>3+ YEARS EXPRIENCE </small></p>
            <div className='footer-content'>
              <p>
                <small >
                  HTML(CSS)
                </small>
              </p>
              <p>
                <small >
                  JAVASCRIPT DEVELOPER
                </small>
              </p>
              <p>
                <small >
                  Machine Learning
                </small>
              </p>
              <p>
                <small >
                  MySQL
                  </small>
              </p>
              <p>
                <small >
                  Python
                </small>
              </p>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
            <div className='footer-title'>
              <h6>Contact</h6>
            </div>
            <div className='footer-content'>
              <p>
                <small>Address : 2670 Section M, Botshabelo, Bloemfontein</small>
              </p>
              <p >
                <small>Phone : +27 (0) 63 3179 828</small>
              </p>
              <p>
                <small>E-mail : vascoeti123@gmail.com</small>
              </p>
              <div className='social-media mt-4'>
                <a href='https://web.facebook.com/eddie.vasco/' className='text-light'>
                  <i className='fa fa-facebook-f mr-4' />
                </a>
                <a href='https://twitter.com/Qvary34' className='text-light'>
                  <i className='fa fa-twitter mr-4' />
                </a>
                <a href='https://www.instagram.com/vascoeti123/' className='text-light'>
                  <i className='fa fa-instagram mr-4' />
                </a>
                <a href='https://github.com/Vasco21' className='text-light'>
                  <i className='fa fa-github' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-footer pt-3 pb-3 text-center'>
        <strong>© All Right Reserved. Design By Vasco Eti</strong>
      </div>
    </footer>
    </Section>
  );
};

export default Footer;