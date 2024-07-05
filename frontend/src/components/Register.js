import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import "./Register.css"; // Create this CSS file for custom styles

const Register = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    position: "",
    email: "",
    phoneNumber: "",
    companyWebsite: "",
    aiServices: "",
    aiModels: "",
    aiProducts: "",
    bigCustomers: "",
    revenue: "",
    headquarters: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Container className="register-container">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="register-card">
            <Card.Body>
              <h3 className="text-center mb-4">Register</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formCompanyName" className="mb-3">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your company name"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formContactPerson" className="mb-3">
                  <Form.Label>Contact Person</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter contact person's name"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formPosition" className="mb-3">
                  <Form.Label>Position</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formPhoneNumber" className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your phone number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formCompanyWebsite" className="mb-3">
                  <Form.Label>Company Website URL</Form.Label>
                  <Form.Control
                    type="url"
                    placeholder="Enter company website URL"
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formAIServices" className="mb-3">
                  <Form.Label>AI Services Being Provided</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter AI services"
                    name="aiServices"
                    value={formData.aiServices}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formAIModels" className="mb-3">
                  <Form.Label>AI Models</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter AI models"
                    name="aiModels"
                    value={formData.aiModels}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formAIProducts" className="mb-3">
                  <Form.Label>AI Products Available</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter AI products"
                    name="aiProducts"
                    value={formData.aiProducts}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBigCustomers" className="mb-3">
                  <Form.Label>Potential Big Customers</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter potential big customers"
                    name="bigCustomers"
                    value={formData.bigCustomers}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formRevenue" className="mb-3">
                  <Form.Label>Revenue</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter revenue"
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formHeadquarters" className="mb-3">
                  <Form.Label>Headquarters</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter headquarters"
                    name="headquarters"
                    value={formData.headquarters}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Register
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
