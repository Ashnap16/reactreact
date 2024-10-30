


import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import meta from '../assets/img/meta.png';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">About Our College</h2>
      <Row className="align-items-center">
        <Col xs={12} md={6} className="mb-4 mb-md-0">
          <Image src={meta} rounded style={{ width: '100%', maxWidth: '500px', marginBottom: '20px' }} />
        </Col>
        <Col xs={12} md={6}>
          <div className="text-md-start">
            <p>
              A college is an institution of higher education where students pursue academic programs beyond high school level. Colleges offer a variety of undergraduate and sometimes postgraduate degrees in fields such as liberal arts, sciences, business, engineering, and more specialized areas. They provide a structured environment for learning, often emphasizing both theoretical knowledge and practical skills through lectures, seminars, and hands-on experiences. Colleges also serve as hubs for intellectual growth, personal development, and social interaction, preparing students for careers or further academic pursuits.
            </p>
            {showMore && (
              <>
                <p>
                  Certainly! Here's a paragraph about a college:

                  Nestled in the heart of a bustling urban landscape, Ridgeview University stands as a beacon of academic excellence and cultural diversity. Founded over a century ago, its sprawling campus blends historic architecture with modern facilities, creating a dynamic environment for learning and growth. Students from around the globe flock to Ridgeview, drawn by its renowned faculty, innovative research opportunities, and vibrant student life. Whether pursuing degrees in business, engineering, arts, or sciences, students benefit from small class sizes and personalized attention, fostering deep connections with peers and mentors alike. Beyond academics, Ridgeview University embraces a rich tapestry of extracurricular activities, from championship-winning sports teams to student-run clubs promoting everything from sustainability to the arts. With a commitment to fostering both intellectual inquiry and community engagement, Ridgeview University continues to shape the leaders and innovators of tomorrow.
                </p>
              </>
            )}
            <div className="d-flex justify-content-center"> 
              <Button variant="primary" onClick={toggleShowMore}>
                {showMore ? 'Show Less' : 'Show More'}
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
