import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import "./Project.css";
import Header from "../Home/Header/Header";
import Footerpg from "../Footerpg/Footerpg";
import Portfolio from "../../assets/Home/dmg.png";
import Bussiness from "../../assets/Home/BPApp.png";
import BeautyMarket from "../../assets/Home/Beauty.png";
import Greetings from "../../assets/Home/greeting.png";
import Organisation from "../../assets/Home/Organisation.png";
import Bots from "../../assets/Home/bots.png";

export default function Projects() {
  return (
    <div className="heading">
      <Header />
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white", textAlign: "center" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Bussiness}
                isBlog={false}
                title="Bussiness App"
                description="Creating a bussiness Web App, With innovation of new creation we can make our life easy, 
              changes and good things can lead us to overcome better future and possibilities of 
              wonderful features. Discover the platform that gives you the freedom to have your 
              own business Website and personal Website, together we can make change... "
                link="https://bussuness-app.netlify.app/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Portfolio}
                isBlog={false}
                title="Portlio"
                description="Create a Portlio about myself and professional skill,."
                link="https://vasco-resume.netlify.app/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={BeautyMarket}
                isBlog={false}
                title="BeautyMarket App"
                description="Beautifully And Wonderfully Made, And Our Glam 
              Experiences Will Accentuate Your Inner Beauty.Our Glam Experiences Can Be 
              Purchased As Gifts To Give That Glamorous Person In Your Life."
                link="https://breakemarket-app.netlify.app/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Greetings}
                isBlog={false}
                title="Greetings App"
                description="Greeting app that teach client to greet names with different languages"
                link="https://greetings-webapp12.herokuapp.com/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Organisation}
                isBlog={false}
                title="Group Organisation App"
                description="We establish creative mindset with positive way of thinking, 
              Connect with young people. Get to know what makes them tick and what motivates them. 
              This knowledge will help you coach them on how to identify goals that are meaningful 
              to them. It will also boost their self-confidence, and know best career for themselves."
                link="https://creative-power-org.herokuapp.com/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Bots}
                isBlog={false}
                title="Bots Baker's App"
                description="Create a web app, for a company that is going sell bread, and able to get orders online and get more news on there activities"
                link="https://bots-bakers-app.netlify.app/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Footerpg />
    </div>
  );
}