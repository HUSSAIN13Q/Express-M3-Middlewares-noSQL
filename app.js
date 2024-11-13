const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const path = require("path");

const postsRoutes = require("./api/posts/posts.routes");
const connectDB = require("./database");
const { url, errorHandling } = require("./middlewares/handling");

connectDB();

app.use(cors());
app.use("/media", express.static(path.join(__dirname, "media")));
app.use(express.json());
app.use(morgan("dev"));
app.use("/posts", postsRoutes);

app.all("*", url);

app.use(errorHandling);

const PORT = 8005;

app.listen(PORT, () => {
  console.log(`the app is running in port http://localhost:${PORT}`);
});
