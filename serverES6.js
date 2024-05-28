import express from "express";

import posts from "./routes/posts.js";
const app = express();
const PORT = process.env.PORT || 8001;

//body parser mw
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes import & declaration  as smw
app.use("/api/v1/posts", posts);

app.listen(PORT, () => console.log(`serverJSON is running on PORT ${PORT}`));
