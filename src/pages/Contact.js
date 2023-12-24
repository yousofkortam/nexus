import {React , useState} from "react"; 
import { Container, Row, Col ,Button ,Form } from "react-bootstrap";


export default function Contact() {
  const  [data , setData] = useState({name:"", email:"", message:""});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({...data, [name]: value})

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for contact!")

  }

  return (
       
      <Container>
        <Row className="mb-5 mt-3">
          <Col lg="8">
                <h6 className="float-start text-black-50"><pre>Home /</pre></h6>
              <h6 className="float-start text-black"><pre> Contact</pre></h6>
          </Col>
        </Row>
        <Form method="post" onSubmit={handleSubmit}>

      <Row className="mb-3">
            <Col lg="5" className="mb-5">
                <h3 className="color_sec py-4">Get in touch</h3>
                <address>
                <strong>Email:</strong>
                <a href="mailto:me@email.com">
                developer@javascript.com
                </a>
                <br />
                <br />
                <strong>Phone:</strong>
                <a href="tel:+1-555-555-1212">555-555-1212</a>
                </address>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, 
                nisi at imperdiet pharetra.</p>
            </Col>
            <Col>
                <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter Your Name" 
                    name="name" 
                    onChange={handleChange} 
                    value={data.name} 
                    required/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email"
                    placeholder="Enter Your Email" 
                    name="email" 
                    onChange={handleChange} 
                    value={data.email} 
                    required/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Message</Form.Label>
                <textarea
                        className="form-control rounded-0"
                        id="message"
                        name="message"
                        placeholder="Message"
                        rows="5" 
                        onChange={handleChange}
                        value={data.message}
                        required
                    ></textarea>
                </Form.Group>
                <Button className="mt-3" variant="danger" type="submit">
                Submit
                </Button>
            </Col>
        </Row>
    </Form>
      </Container>
  );
}

