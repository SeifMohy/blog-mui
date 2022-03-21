import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormik } from "formik";
import * as yup from "yup";

const Modal = ({ posts, setPosts }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    formik.resetForm();
  };

  const userSchema = yup.object({
    title: yup.string().required("Required"),
    author: yup.string().required("Required"),
    post: yup.string().max(240),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      post: "",
    },
    onSubmit: (values) => {
      const id = Math.round(Math.random() * 100000);
      setPosts([...posts, { ...values, id }]);
      formik.resetForm();
      handleClose();
    },
    validationSchema: userSchema,
  });

  return (
    <div>
      {" "}
      <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
        Add!
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please complete below items to post.
          </DialogContentText>
          <TextField
            error={formik.touched.title && formik.errors.title}
            helperText={formik.errors.title}
            autoFocus
            onBlur={formik.handleBlur}
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.title}
            name="title"
            onChange={formik.handleChange}
          />
          <TextField
            error={formik.touched.author && formik.errors.author}
            helperText={formik.errors.author}
            margin="dense"
            label="Author"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.author}
            name="author"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <TextField
            error={formik.touched.post && formik.errors.post}
            helperText={formik.errors.post}
            margin="dense"
            label="Post"
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="standard"
            value={formik.values.post}
            name="post"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={formik.handleSubmit}>
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
