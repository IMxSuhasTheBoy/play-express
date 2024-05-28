import express from "express";

import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
const app = express();
const PORT = process.env.PORT || 8001;

//body parser mw
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// mw
app.use(logger);

//Routes import & declaration  as smw
app.use("/api/v1/posts", posts);

app.listen(PORT, () => console.log(`serverJSON is running on PORT ${PORT}`));
