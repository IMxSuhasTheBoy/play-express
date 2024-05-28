const express = require("express");

const app = express();
const PORT = process.env.PORT || 8001;

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
app.get("/api/v1/posts", (req, res) => {
  res.json(posts);
});

//get single post
app.get("/api/v1/posts/:id", (req, res) => {
  // console.log(req.params, "posts/:id ~ req.params");
  // console.log(parseInt(req.params.id));
  const id = parseInt(req.params.id);
  res.json(posts.filter((post) => post.id === id));
});

app.listen(PORT, () => console.log(`serverJSON is running on PORT ${PORT}`));
