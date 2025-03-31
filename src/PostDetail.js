import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To access postId from the URL
import { getPostById } from "./services/postService";

const PostDetail = () => {
  const { postId } = useParams(); // Extract postId from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await getPostById(postId);
        setPost(postData.data); // Assuming response has the 'data' property
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch post details.");
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="post-detail-container">
      {post && (
        <div>
          <h1>{post.jobTitle}</h1>
          <img src={post.img} alt="Job" style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }} />
          <div className="post-detail-info">
            <p><strong>Location:</strong> {post.location}</p>
            <p><strong>Price:</strong> {post.price}</p>
            <p><strong>Description:</strong> {post.description}</p>
            <p><strong>Contact:</strong> {post.contact}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
