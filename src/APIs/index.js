import axios from "axios"

//setting a base url so the following urls have same base
const API = axios.create({baseURL: "https://api.tawwr.com"})

//get posts 
export const getPosts = () => API.get("/posts")

//post a post 
export const addPosts = (newPost) => API.post("/posts", newPost)

//update post 
export const updatePost = (id, updatedPost) => API.put(`/posts/${id}`, updatedPost)

//delete post 
export const deletePost = (id, deletedPost) => API.delete(`/posts/${id}`, deletedPost)

//get comments 
export const getPostById = (id) => API.get(`/posts/${id}`)

//post a comment
export const addComment = (id, newComment) => API.post(`/posts/${id}/comment`, newComment)
