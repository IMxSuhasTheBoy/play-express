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
  //! accept only the data that can be accepted(expected data)
  console.log(req.query);
  //test : http://localhost:8000/api/v1/posts?limit=2&sort=desc

  const limit = parseInt(req.query.limit) || 3;

  if (!isNaN(limit) && limit > 0) {
    res.json(posts.slice(0, limit));
  } else {
    res.json(posts);
  }
});

//get single post
app.get("/api/v1/posts/:id", (req, res) => {
  // console.log(req.params, "posts/:id ~ req.params");
  // console.log(parseInt(req.params.id));
  const id = parseInt(req.params.id);
  res.json(posts.filter((post) => post.id === id));
});

app.listen(PORT, () => console.log(`serverJSON is running on PORT ${PORT}`));