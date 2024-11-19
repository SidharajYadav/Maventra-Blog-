import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const Signup = () => {
  return (
    <Container className="mt-5">
      <h2>Signup</h2>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group controlId="email" className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="password" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        <Button variant="success" className="mt-3" type="submit">
          Signup
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;
