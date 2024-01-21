import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import "../Styles/Prices.scss"

const PricesSection = () => {
  return (
    <Row className="justify-content-center mt-5">
      <Col md={4} className="mb-4">
        <Card className="cartoony-card">
          <Card.Header as="h5" className="cartoony-header">
            Basic Plan
          </Card.Header>
          <Card.Body>
            <Card.Title className="cartoony-title">$9.99/month</Card.Title>
            <Card.Text className="cartoony-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Card.Text>
            <Button variant="primary" className="cartoony-button">
              Get Started
            </Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4} className="mb-4">
        <Card className="cartoony-card">
          <Card.Header as="h5" className="cartoony-header">
            Standard Plan
          </Card.Header>
          <Card.Body>
            <Card.Title className="cartoony-title">$19.99/month</Card.Title>
            <Card.Text className="cartoony-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Card.Text>
            <Button variant="primary" className="cartoony-button">
              Get Started
            </Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4} className="mb-4">
        <Card className="cartoony-card">
          <Card.Header as="h5" className="cartoony-header">
            Premium Plan
          </Card.Header>
          <Card.Body>
            <Card.Title className="cartoony-title">$29.99/month</Card.Title>
            <Card.Text className="cartoony-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Card.Text>
            <Button variant="primary" className="cartoony-button">
              Get Started
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default PricesSection;
