// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { Link } from "react-router-dom";

// // const Home = () => {
// //   const [posts, setPosts] = useState([]);

// //   useEffect(() => {
// //     axios
// //       .get("http://localhost:5000/api/posts")
// //       .then((response) => setPosts(response.data))
// //       .catch((error) => console.error(error));
// //   }, []);

// //   return (
// //     <div className="container mt-5">
// //       <h1 className="text-center">All Blog Posts</h1>
// //       <div className="list-group">
// //         {posts.map((post) => (
// //           <div key={post._id} className="list-group-item">
// //             <h5>{post.title}</h5>
// //             <p>{post.subtitle}</p>
// //             <Link to={`/post/${post._id}`} className="btn btn-primary">
// //               Read more
// //             </Link>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;
// import React from "react";
// import { Link } from "react-router-dom";
// import { Container, Button } from "react-bootstrap";

// const Home = () => {
//   return (
//     <Container className="text-center mt-5">
//       <h1>Welcome to the Blog Platform</h1>
//       <p>Share your thoughts and explore posts from others!</p>
//       <Link to="/login">
//         <Button variant="primary" className="m-2">
//           Login
//         </Button>
//       </Link>
//       <Link to="/signup">
//         <Button variant="secondary" className="m-2">
//           Signup
//         </Button>
//       </Link>
//     </Container>
//   );
// };

// export default Home;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Card, Row, Col, Form } from "react-bootstrap";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [tagsFilter, setTagsFilter] = useState("");

  // Fetch posts from the backend
  useEffect(() => {
    // Simulating an API call
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        setPosts(data);
        setFilteredPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // Filter posts based on the selected tag
  const handleTagFilterChange = (event) => {
    const tag = event.target.value;
    setTagsFilter(tag);

    if (tag) {
      const filtered = posts.filter((post) =>
        post.tags.some((t) => t.toLowerCase().includes(tag.toLowerCase()))
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  };

  return (
    <Container className="text-center mt-5">
      <h1>Welcome to the Blog Platform</h1>
      <p>Share your thoughts and explore posts from others!</p>
      <div>
        <Link to="/login">
          <Button variant="primary" className="m-2">
            Login
          </Button>
        </Link>
        <Link to="/signup">
          <Button variant="secondary" className="m-2">
            Signup
          </Button>
        </Link>
      </div>

      {/* Tags Filter */}
      <Form.Group className="my-4">
        <Form.Control
          type="text"
          placeholder="Filter by tags"
          value={tagsFilter}
          onChange={handleTagFilterChange}
        />
      </Form.Group>

      {/* Display filtered posts */}
      <Row>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Col key={post.id} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {post.subtitle}
                  </Card.Subtitle>
                  <Card.Text>
                    <strong>Tags:</strong> {post.tags.join(", ")}
                  </Card.Text>
                  <Link to={`/post/${post.id}`}>
                    <Button variant="primary">View Post</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </Row>
    </Container>
  );
};

export default Home;
