import { createContext, useState, useEffect } from "react";
//1. creating context
const PostsContext = createContext();
// initiating function
const ContextProvider = ({ children }) => {
  //destructuring children

  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("posts")) || []
  );

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
};
export { ContextProvider, PostsContext };
