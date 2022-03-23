import React, { useEffect } from "react";
import Card from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditModal from "./EditModal";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import IconButton from "@mui/material/IconButton";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getPosts, deletePost } from "../Actions/PostActions";

const Posts = () => {
  const dispatch = useDispatch();
  //Adding state
  const posts = useSelector((state) => {
    console.log(state);
    return state.posts;
  });
  //dispatching adding contents
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (posts === 0) <div>loading</div>;
  return (
    <div>
      {" "}
      <Grid
        container
        spacing={3}
        sx={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}
      >
        {posts.map((post) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card sx={{ bgcolor: "#4dabf5" }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {post.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {post.userId}
                  </Typography>
                  <Typography variant="body2">{post.body}</Typography>
                </CardContent>

                <CardActions disableSpacing>
                  <IconButton>
                    <ThumbUpIcon />
                    <h5>{post.upVotesTotal}</h5>
                  </IconButton>
                  <IconButton>
                    <ThumbDownIcon />
                    <h5>{post.downVotesTotal}</h5>
                  </IconButton>
                </CardActions>

                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    color: "white",
                  }}
                >
                  <Link style={{ textDecoration: "none" }} to={`/${post.id}`}>
                    <Button
                      variant="outlined"
                      size="small"
                      color="inherit"
                      style={{ color: "white" }}
                    >
                      Read More
                    </Button>
                  </Link>
                  <EditModal
                    title={post.title}
                    author={post.userId}
                    post={post.body}
                    id={post.id}
                  />
                  <Button
                    variant="outlined"
                    onClick={() => {
                      dispatch(deletePost(post.id));
                    }}
                    size="small"
                    color="inherit"
                    style={{ color: "white" }}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Posts;
