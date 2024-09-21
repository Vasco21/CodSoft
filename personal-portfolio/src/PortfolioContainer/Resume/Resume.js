import React, {useState, useEffect} from 'react';
import './Resume.css';
import Header from '../Home/Header/Header';
import Footerpg from '../Footerpg/Footerpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
const url = "https://vasco21.github.io/PortfolioApi/portfolio.json";

export default function Resume() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const reponse = await fetch(url)
    const newJobs = await reponse.json()
    setJobs(newJobs)
    setLoading(false)
  }
  useEffect(() => {
    fetchJobs()
  }, [])
  if (loading) {
    return (
      <section className="section loading">
       
      </section>
    )
  }
  const { company, dates, duties, title } = jobs[value]
  return (
    <div className="he">
      <Header/>
    <section className="section">
      <div className="title">
      <h1>Resume</h1>
      <p className="msg">My formal Bio Details</p>
      <div className="underline"></div>
      </div>
      <div className="Resume-background">
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h6>{company}</h6>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
      </div>
    </section>
    <Footerpg/>
    </div>

  )
}