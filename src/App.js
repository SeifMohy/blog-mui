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
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Posts />}
          />
          <Route path="/:id" element={PostPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
