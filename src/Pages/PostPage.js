import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Comments from "../Comps/Comments";
import * as api from "../APIs"


const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  async function fetchPostById() {
    const response = await api.getPostById(id);
    console.log(response.data.data)
    setPost(response.data.data)
    return response.data.data;
  }

  async function addComment (){
    fetchPostById()
  }

  useEffect(() => {
    fetchPostById()
  }, []);

console.log(post);



  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{post.body}</h2>
      <Comments post ={post} id = {id} addComment = {addComment}/>
    </div>
  );
};

export default PostPage;
