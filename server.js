const express = require("express");
const path = require("path");

const app = express();
const port = 8000;

//setup static folder (mw)
app.use(express.static(path.join(__dirname, "public"))); //for static files (css, images, js, etc)
//no routes require to serve html files by default
//test url : http://localhost:8000/about.html

/** //for html files
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});
*/

app.listen(port, () => console.log(`Server is running on port ${port}`));
