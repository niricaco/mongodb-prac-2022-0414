require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

console.log(process.env.CONNECTION_STRING);

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log("connected"))
  .catch(() => console.log("error"));

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  const kittySchema = new mongoose.Schema({
    name: String,
  });
  const Kitten = mongoose.model("Kitten", kittySchema);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
