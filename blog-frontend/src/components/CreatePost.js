// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const CreatePost = () => {
//   const [title, setTitle] = useState("");
//   const [subtitle, setSubtitle] = useState("");
//   const [tags, setTags] = useState("");
//   const [content, setContent] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const postData = {
//       title,
//       subtitle,
//       tags: tags.split(","),
//       content,
//     };

//     try {
//       await axios.post("http://localhost:5000/api/posts/create", postData);
//       navigate("/");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Create New Post</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="title" className="form-label">
//             Title
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="subtitle" className="form-label">
//             Subtitle
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="subtitle"
//             value={subtitle}
//             onChange={(e) => setSubtitle(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="tags" className="form-label">
//             Tags (comma separated)
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="tags"
//             value={tags}
//             onChange={(e) => setTags(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="content" className="form-label">
//             Content
//           </label>
//           <textarea
//             className="form-control"
//             id="content"
//             rows="4"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Create Post
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreatePost;
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
