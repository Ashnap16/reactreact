






import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import metaa from '../assets/img/metaa.jpg';
import About from './About';
import Course from './Course';
import Gallery from './Gallery';

const Home = () => {
  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col xs={12} md={6} className="mb-4 mb-md-0">
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>Welcome to <br />Commerce College</h1>
          <p>
            Discover a place where you can learn and grow. Join us to experience
            an exceptional education.
          </p>
          <Button variant="primary" href='https://www.youtube.com/'>Get started</Button>
        </Col>
        <Col xs={12} md={6} className="text-end mt-2 mt-md-0">
          <Image src={metaa} rounded style={{ width: '200%', maxWidth: '400px' }} />
        </Col>
      </Row>
      <About/>
      <Course/>
      <Gallery/>
    </Container>
  );
};

export default Home;
