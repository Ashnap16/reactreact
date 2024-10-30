// import React from 'react';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
// import Row from 'react-bootstrap/Row';
// import img1 from '../assets/img/image1.jpg';
// import img2 from '../assets/img/img2.jpg';
// import img3 from '../assets/img/img3.jpeg';
// import img4 from '../assets/img/img4.jpg';
// import img5 from '../assets/img/img5.jpeg';
// import img6 from '../assets/img/img6.jpeg';
// import './Gallery.css'; // Import the CSS file

// function ShapeExample() {
//   return (
//     <>
//       <h2 className="text-center mt-4">Image Gallery</h2> {/* Add your heading here */}
//       <Container>
//         <Row>
//           <Col xs={6} md={4}>
//             <Image src={img1} rounded fluid className="image-custom-size" />
//           </Col>
//           <Col xs={6} md={4}>
//             <Image src={img2} rounded fluid className="image-custom-size" />
//           </Col>
//           <Col xs={6} md={4}>
//             <Image src={img3} rounded fluid className="image-custom-size" />
//           </Col>
//         </Row>
//         <Row className="mt-4"> {/* Add margin-top to the second row */}
//           <Col xs={6} md={4}>
//             <Image src={img4} rounded fluid className="image-custom-size" />
//           </Col>
//           <Col xs={6} md={4}>
//             <Image src={img5} rounded fluid className="image-custom-size" />
//           </Col>
//           <Col xs={6} md={4}>
//             <Image src={img6} rounded fluid className="image-custom-size" />
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default ShapeExample;



import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import img1 from '../assets/img/image1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.jpeg';
import img4 from '../assets/img/img4.jpg';
import img5 from '../assets/img/img5.jpeg';
import img6 from '../assets/img/img6.jpeg';
import './Gallery.css'; // Import the CSS file

function ShapeExample() {
  return (
    <>
      <h2 className="text-center mt-4">Our Gallery</h2> {/* Add your heading here */}
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <Image src={img1} rounded fluid className="image-custom-size" />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Image src={img2} rounded fluid className="image-custom-size" />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Image src={img3} rounded fluid className="image-custom-size" />
          </Col>
        </Row>
        <Row className="mt-4 margin-top-custom"> 
          <Col xs={12} sm={6} md={4}>
            <Image src={img4} rounded fluid className="image-custom-size" />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Image src={img5} rounded fluid className="image-custom-size" />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Image src={img6} rounded fluid className="image-custom-size" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ShapeExample;
