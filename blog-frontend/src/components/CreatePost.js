import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const CreatePost = () => {
  return (
    <Container className="mt-5">
      <h2>Create a New Post</h2>
      <Form>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter post title" />
        </Form.Group>
        <Form.Group controlId="content" className="mt-3">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Write your post here..."
          />
        </Form.Group>
        <Button variant="primary" className="mt-3" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CreatePost;
