import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>Post Title {id}</Card.Title>
          <Card.Text>
            This is a detailed view of the post with ID: {id}.
          </Card.Text>
          <Button variant="secondary">Go Back</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Post;

