import colors from "colors";

const logger = (req, res, next) => {
  const methodColors = {
    GET: "green",
    POST: "yellow",
    PUT: "cyan",
    DELETE: "red",
  };
  const color = methodColors[req.method] || "grey";

  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`[
      color
    ]
  );
  next();
};

export default logger;
