// const express = require("express");
import { Router } from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/postController.js";
// const router = express.Router();

const router = Router();

//TODO: get all posts
router.get("/", getPosts);

//TODO: get single post
router.get("/:id", getPost);

//TODO: create new post
router.post("/", createPost);

//TODO: update post
router.put("/:id", updatePost);

//TODO: delete post
router.delete("/:id", deletePost);

// module.exports = router;
export default router;
