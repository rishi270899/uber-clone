const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db/db");
const userRoutes = require("./routes/userRoutes");

connectDB();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("helo world");
});

app.use("/users", userRoutes);

module.exports = app;
