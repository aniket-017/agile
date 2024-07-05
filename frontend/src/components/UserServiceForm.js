import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import "./UserServiceForm.css"; // Create this CSS file for custom styles

const UserServiceForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    companyLocation: "",
    employeeCount: "",
    serviceOfInterest: "",
    additionalComments: "",
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
    <Container className="user-service-form-container">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="user-service-form-card">
            <Card.Body>
              <h3 className="text-center mb-4">Connect With Our Partner?</h3>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col>
                    <Form.Group controlId="formFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your first name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your last name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Business Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your business email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formCompany" className="mb-3">
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your company name"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formCompanyLocation" className="mb-3">
                  <Form.Label>Company Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your company location"
                    name="companyLocation"
                    value={formData.companyLocation}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formEmployeeCount" className="mb-3">
                  <Form.Label>Employee Count</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter employee count"
                    name="employeeCount"
                    value={formData.employeeCount}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formServiceOfInterest" className="mb-3">
                  <Form.Label>Service of Interest</Form.Label>
                  <Form.Control
                    as="select"
                    name="serviceOfInterest"
                    value={formData.serviceOfInterest}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="NLP">Natural Language Processing (NLP)</option>
                    <option value="ComputerVision">Computer Vision</option>
                    <option value="RPA">Robotic Process Automation (RPA)</option>
                    {/* Add more options as needed */}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formAdditionalComments" className="mb-3">
                  <Form.Label>Additional Comments</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter any additional comments"
                    name="additionalComments"
                    value={formData.additionalComments}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserServiceForm;
