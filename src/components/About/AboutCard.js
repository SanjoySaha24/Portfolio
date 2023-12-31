import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="">Sanjoy Saha </span>
            from <span className="purple"> West Bengal, India.</span>
            <br /> I am a final year student pursuing B.Tech in Computer Science and Engineering
             from Netaji Subhash Engineering College, Kolkata.
   
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>            
          <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
