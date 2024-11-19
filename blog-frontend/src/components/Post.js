// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const Post = () => {
//   const { id } = useParams();
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:5000/api/posts/${id}`)
//       .then((response) => setPost(response.data))
//       .catch((error) => console.error(error));
//   }, [id]);

//   if (!post) return <div>Loading...</div>;

//   return (
//     <div className="container mt-5">
//       <h1>{post.title}</h1>
//       <h4>{post.subtitle}</h4>
//       <div className="tags mb-3">
//         {post.tags.map((tag, index) => (
//           <span key={index} className="badge bg-primary me-2">
//             {tag}
//           </span>
//         ))}
//       </div>
//       <div>{post.content}</div>
//     </div>
//   );
// };

// export default Post;
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

