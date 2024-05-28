import express from "express";

import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
const app = express();
const PORT = process.env.PORT || 8001;

//body parser mw
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// mw
app.use(logger);

//Routes import & declaration  as smw
app.use("/api/v1/posts", posts);

// mw
app.use(notFound);

app.use(errorHandler);

app.listen(PORT, () => console.log(`serverJSON is running on PORT ${PORT}`));
