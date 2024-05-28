const express = require("express");

const router = express.Router();

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

//get all posts
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

//get single post
router.get("/:id", (req, res) => {
  // console.log(req.params, "posts/:id ~ req.params");
  // console.log(parseInt(req.params.id));
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res
      .status(404)
      .json({ message: `post with id ${id} not found! ! !` });
  }
  res.status(200).json(post);
  // res.status(200).json(posts.filter((post) => post.id === id));
});

module.exports = router;
