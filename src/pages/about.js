import React from 'react';
import shop from '../images/shop.png';
import manager1 from '../images/im8.png';
import manager2 from '../images/im9.png';
import manager3 from '../images/im10.png';
import { Container, Row, Col , Image ,Card, CardGroup } from "react-bootstrap";


 export default function About() {
  return (
    <Container>
      <Row className="mb-5 mt-3">
          <Col lg="8">
              <h6 className="float-start text-black-50"><pre>Home /</pre></h6>
              <h6 className="float-start text-black"><pre> About</pre></h6>
          </Col>
      </Row>

      <Row className="sec_sp">
        <h1 className="float-start text-black">Our Story</h1>
        <Col lg="5" className="mb-5">
            <p>Launced in 2015, Exclusive is South Asia's premier online shopping makterplace 
            with an active presense in Bangladesh. Supported by wide range of tailored marketing, 
            data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 
            millioons customers across the region.
            <pre>

            </pre>
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive 
            offers a diverse assotment in categories ranging from consumer.
            </p>
        </Col>
        <Col lg="7" className="align-items-center">
          <Image src={shop} width={365} height={250}/>
        </Col>
      </Row>

      <Row className="mb-6 mt-3">
        <Col className="mb-3">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={manager1} />
            <Card.Body>
              <Card.Title>Ethan Welch</Card.Title>
              <Card.Text>
              Founder & Chairman
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-3">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={manager2} />
            <Card.Body>
              <Card.Title>Trevor Stanley</Card.Title>
              <Card.Text>
              Managing Director
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-3">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={manager3} />
            <Card.Body>
              <Card.Title>Allen Guzman</Card.Title>
              <Card.Text>
              Product Designer
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
   </Row>
    </Container>
  );
}

