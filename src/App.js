import "./App.css";
import NavBar from "./Comps/NavBar";
import Posts from "./Comps/Posts";

import PostPage from "./Pages/PostPage";
import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import  {useDispatch, useSelector} from "react-redux"
import {addingPosts, deletingPosts, savingPosts} from "./Actions"


function App() {

  const posts = useSelector((state)=>{return state});
  const dispatch = useDispatch();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("posts"))
    dispatch(savingPosts(saved || []))
  }, []);
  
  // const [posts, setPosts] = useState(
  //   JSON.parse(localStorage.getItem("posts")) || []
  // );

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);
  


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Posts/>}
          />
          <Route path="/:id" element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
