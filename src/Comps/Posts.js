import React, { useEffect } from "react";
import Card from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

const Posts = ({ posts, setPosts }) => {
  const delItem = (id) => {
    const deleted = posts.filter((post) => {
      return +post.id !== +id;
    });
    setPosts(deleted);
  };

  return (
    <div>
      {posts.map((post) => {
        return (
          <Grid key={post.id} container spacing={2}>
            <Grid
              item
              sx={{ margin: 2, disply: "flex", flexWrap: "wrap" }}
              xs={5}
            >
              <Card sx={{ minWidth: 275, bgcolor: "#4dabf5" }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {post.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {post.author}
                  </Typography>
                  <Typography variant="body2">{post.post}</Typography>
                </CardContent>
                <CardActions
                  sx={{ display: "flex", justifyContent: "flex-end", color: "white"}}
                >
                  <Link style={{ textDecoration: "none" }} to={`/${post.id}`}>
                    <Button variant="outlined" size="small">
                      Read More
                    </Button>
                  </Link>
                  <Button
                    variant="outlined"
                    onClick={() => delItem(post.id)}
                    size="small"
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
};

export default Posts;
