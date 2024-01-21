// Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Styles/Footer.scss';
import Logo from "../Styles/NixieLogo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <img src={Logo}  className="logo" alt="" />
          </Col>
          <Col md={4}>
            
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            
            <ul className="list-unstyled">
              <li><a href="#">FACEBOOK</a></li>
              <li><a href="#">INSTAGRAM</a></li>
              <li><a href="#">TWITTER</a></li>
              
              
              
            </ul>
          </Col>
        
        </Row>
       
        <Row>
          <Col md={12}>
            <p className="text-center">© {new Date().getFullYear()} Nixie Digital. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
