import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";

import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as api from "../APIs"
import {useState} from "react"


const Comments = ({ post, id, addComment}) => {
  const [store, setStore] = useState([])

  const dispatch = useDispatch();

  const userSchema = yup.object({
    body: yup.string().required("Required"),
  });


  const formik = useFormik({
    initialValues: {
      body: "",
      userId: "2",
    },
    onSubmit: async (values) => {
      //console.log(values)
      // dispatch(addComment(id, values)); //dispatching comments
      const response = await api.addComment(id, values); //adding post to data base
      addComment();
      formik.resetForm();
    },
    validationSchema: userSchema,
  });

  //const state = useSelector((state)=>state.posts)

  // useEffect(()=>{setStore(state)
  //   console.log(state)},[store])

  // console.log(post);

  return (
    <div>
      <h4>Comments!</h4>
      {post.comments?.map((comment) => {
        return (
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
              title={comment.UserId}
              subheader="September 14, 2016"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {comment.body}
              </Typography>
            </CardContent>
          </Card>
        );
      })}

      {/* for adding comments  */}
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-textarea"
          label="comment!"
          multiline
          variant="filled"
          name="body"
          onChange={formik.handleChange}
        />

        <Button
          variant="outlined"
          size="small"
          color="inherit"
          style={{}}
          type="submit"
          onClick={formik.handleSubmit}
        >
          Comment
        </Button>
      </Box>
    </div>
  );
};
export default Comments;
