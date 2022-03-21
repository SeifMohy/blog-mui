import "./App.css";
import NavBar from "./Comps/NavBar";
import Posts from "./Comps/Posts";

import PostPage from "./Pages/PostPage";
import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("posts")) || []
  );

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar posts={posts} setPosts={setPosts} />
        <Routes>
          <Route
            path="/"
            element={<Posts posts={posts} setPosts={setPosts} />}
          />
          <Route path="/:id" element={PostPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
