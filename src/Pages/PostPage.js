import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("posts"));
    const post = posts.filter((a) => {
      return +a.id === +id;
    }, [])[0];
    setPost(post);
  });

  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
};

export default PostPage;
