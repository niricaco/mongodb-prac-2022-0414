require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bookRoutes = require("./routes/book");
const userRoutes = require("./routes/user");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/api/book", bookRoutes);
app.use("/api/user", userRoutes);

console.log(process.env.CONNECTION_STRING);

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log("connected"))
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
