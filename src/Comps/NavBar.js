import React from "react";
import Modal from "./Modal";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const NavBar = ({ posts, setPosts }) => {
  return (
    <Box sx={{flex: 1}}>
      <AppBar position="static" >
        <Toolbar sx={{justifyContent: "space-between"}}>
          <Link to="/" style={{textDecoration: "none"}}>
            <Typography color="white" variant="h6" component="div">
              Bonkers!
            </Typography>
          </Link>
          <Modal  posts={posts} setPosts={setPosts} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
