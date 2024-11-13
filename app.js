const express = require("express");
const morgan = require("morgan");
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const connectDB = require("./database");
const { url, errorHandling } = require("./middlewares");

connectDB();

app.use(express.json());
app.use(morgan("dev"));

app.use("/posts", postsRoutes);

app.all("*", url);

app.use(errorHandling);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`the app is running in port http://localhost:${PORT}`);
});
