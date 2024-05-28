// const express = require("express");
import { Router } from "express";
// const router = express.Router();

const router = Router();

let posts = [
  {
    id: 1,
    title: "Post One",
  },
  {
    id: 2,
    title: "Post Two",
  },
  {
    id: 3,
    title: "Post Three",
  },
];

//TODO: get all posts
router.get("/", (req, res) => {
  //! accept only the data that can be accepted(expected data)
  console.log(req.query);
  //test : http://localhost:8000/api/v1/posts?limit=2&sort=desc

  const limit = parseInt(req.query.limit) || 3;

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
});

//TODO: get single post
router.get("/:id", (req, res, next) => {
  // console.log(req.params, "posts/:id ~ req.params");
  // console.log(parseInt(req.params.id));
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    const error = new Error(`post with id ${id} not found! ! !`);
    error.status = 404;
    return next(error);
  }
  res.status(200).json(post);
  // res.status(200).json(posts.filter((post) => post.id === id));
});

//TODO: create new post
router.post("/", (req, res, next) => {
  console.log(req.body, "posts ~ req.body");

  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    const error = new Error(`title is required! ! !`);
    error.status = 400;
    return next(error);
  }

  posts.push(newPost);
  res.status(201).json(posts);
});

//TODO: update post
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    const error = new Error(`post with id ${id} not found! ! !`);
    error.status = 404;
    return next(error);
  }

  if (!req.body.title) {
    return res.status(400).json({ message: "title is required" });
  }

  post.title = req.body.title;
  res.status(200).json(post);
});

//TODO: delete post
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`post with id ${id} not found! ! !`);
    error.status = 404;
    return next(error);
  }

  posts = posts.filter((post) => post.id !== id);
  res.status(200).json({ posts, message: "post deleted" });
});

// module.exports = router;
export default router;
