const express = require("express");

const posts = require("./routes/posts.js");
const app = express();
const PORT = process.env.PORT || 8001;

//Routes
app.use("/api/v1/posts", posts);

app.listen(PORT, () => console.log(`serverJSON is running on PORT ${PORT}`));
