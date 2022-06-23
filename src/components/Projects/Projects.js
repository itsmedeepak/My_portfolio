import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import codelabz from "../../Assets/Projects/codelabz.png";
import editor from "../../Assets/Projects/editor.png";
import keeper from "../../Assets/Projects/keeper.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://www.hashstack.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keeper}
              isBlog={false}
              title="Keeper"
              description="Keeper is an easy way to take notes, create to-do lists, capture ideas, and more. Open it, jot down some thoughts, and you're done. As your collection grows, stay organized with tags and pins, and find what you need with instant search."
              link="https://effortless-brioche-e21e79.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codelabz}
              isBlog={false}
              title="CodeLabz"
              description="CodeLabz is a platform where the users can engage with online tutorials and the organizations can create tutorials for the users. The platform will be developed using ReactJS front end library and the back end will be developed using the Google Cloud Firestore and Google Firebase Real-Time database."
              link="https://dev.codelabz.io/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
