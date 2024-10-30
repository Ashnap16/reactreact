



// import React from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// const Course = () => {
//   return (
//     <Container>
//       <h2 className="mb-4 text-center font-weight-bold">Available Courses</h2>
//       <Row>
//         <Col md={3} className="mb-4 d-flex">
//           <Card className="h-100 d-flex flex-column justify-content-between">
//             <Card.Body>
//               <Card.Title>B.COM</Card.Title>
//               <Card.Text>
//                 A Bachelor of Commerce (BCom) degree equips students with a comprehensive understanding of commerce and business practices. Throughout the course, students delve into subjects like accounting, finance, economics, and management, gaining insights into various facets of the corporate world. BCom programs emphasize practical skills development alongside theoretical knowledge, preparing graduates for roles in accounting, finance, marketing, and human resources, among others.
//               </Card.Text>
//             </Card.Body>
//             <Card.Footer>
//               <Button variant="primary">Join</Button>
//             </Card.Footer>
//           </Card>
//         </Col>
//         <Col md={3} className="mb-4 d-flex">
//           <Card className="h-100 d-flex flex-column justify-content-between">
//             <Card.Body>
//               <Card.Title>BBA</Card.Title>
//               <Card.Text>
//                 A Bachelor of Business Administration (BBA) degree offers students a broad foundation in business management and administration. This undergraduate program covers core subjects such as marketing, finance, human resources, and operations management, providing a comprehensive understanding of business principles and practices. BBA programs typically emphasize practical learning through case studies, internships, and real-world projects, preparing students for leadership roles in various industries.
//               </Card.Text>
//             </Card.Body>
//             <Card.Footer>
//               <Button variant="primary" href=''>Join</Button>
//             </Card.Footer>
//           </Card>
//         </Col>
//         <Col md={3} className="mb-4 d-flex">
//           <Card className="h-100 d-flex flex-column justify-content-between">
//             <Card.Body>
//               <Card.Title>M.COM</Card.Title>
//               <Card.Text>
//                 A Master of Commerce (MCom) degree is a postgraduate program designed to deepen students' understanding of advanced commerce and business concepts. Building upon foundational knowledge gained at the undergraduate level, MCom programs delve into specialized areas such as accounting, finance, economics, and business management. The curriculum typically includes advanced coursework, research projects, and practical applications, preparing graduates for specialized roles in corporate finance, financial analysis, auditing, and academia.
//               </Card.Text>
//             </Card.Body>
//             <Card.Footer>
//               <Button variant="primary">Join</Button>
//             </Card.Footer>
//           </Card>
//         </Col>
//         <Col md={3} className="mb-4 d-flex">
//           <Card className="h-100 d-flex flex-column justify-content-between">
//             <Card.Body>
//               <Card.Title>MBA</Card.Title>
//               <Card.Text>
//                 A Master of Business Administration (MBA) degree is a prestigious postgraduate qualification that equips individuals with a comprehensive understanding of business management principles and practices. MBA programs typically cover a wide range of subjects including finance, marketing, operations, human resources, and strategic management. Known for their practical orientation, MBA curricula often include case studies, simulations, and real-world projects that prepare students for leadership roles in various industries.
//               </Card.Text>
//             </Card.Body>
//             <Card.Footer>
//               <Button variant="primary">Join</Button>
//             </Card.Footer>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Course;




import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = () => {
  return (
    <Container>
      <h2 className="mb-4 text-center font-weight-bold">Available Courses</h2>
      <Row>
        <Col md={3} className="mb-4 d-flex">
          <Card className="h-100 d-flex flex-column justify-content-between">
            <Card.Body>
              <Card.Title>B.COM</Card.Title>
              <Card.Text>
                A Bachelor of Commerce (BCom) degree equips students with a comprehensive understanding of commerce and business practices. Throughout the course, students delve into subjects like accounting, finance, economics, and management, gaining insights into various facets of the corporate world. BCom programs emphasize practical skills development alongside theoretical knowledge, preparing graduates for roles in accounting, finance, marketing, and human resources, among others.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to="/join"><Button variant="primary">Join</Button></Link>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={3} className="mb-4 d-flex">
          <Card className="h-100 d-flex flex-column justify-content-between">
            <Card.Body>
              <Card.Title>BBA</Card.Title>
              <Card.Text>
                A Bachelor of Business Administration (BBA) degree offers students a broad foundation in business management and administration. This undergraduate program covers core subjects such as marketing, finance, human resources, and operations management, providing a comprehensive understanding of business principles and practices. BBA programs typically emphasize practical learning through case studies, internships, and real-world projects, preparing students for leadership roles in various industries.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to="/join"><Button variant="primary">Join</Button></Link>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={3} className="mb-4 d-flex">
          <Card className="h-100 d-flex flex-column justify-content-between">
            <Card.Body>
              <Card.Title>M.COM</Card.Title>
              <Card.Text>
                A Master of Commerce (MCom) degree is a postgraduate program designed to deepen students' understanding of advanced commerce and business concepts. Building upon foundational knowledge gained at the undergraduate level, MCom programs delve into specialized areas such as accounting, finance, economics, and business management. The curriculum typically includes advanced coursework, research projects, and practical applications, preparing graduates for specialized roles in corporate finance, financial analysis, auditing, and academia.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to="/join"><Button variant="primary">Join</Button></Link>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={3} className="mb-4 d-flex">
          <Card className="h-100 d-flex flex-column justify-content-between">
            <Card.Body>
              <Card.Title>MBA</Card.Title>
              <Card.Text>
                A Master of Business Administration (MBA) degree is a prestigious postgraduate qualification that equips individuals with a comprehensive understanding of business management principles and practices. MBA programs typically cover a wide range of subjects including finance, marketing, operations, human resources, and strategic management. Known for their practical orientation, MBA curricula often include case studies, simulations, and real-world projects that prepare students for leadership roles in various industries.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to="/join"><Button variant="primary">Join</Button></Link>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Course;
