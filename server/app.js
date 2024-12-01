const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cookie = require('cookie-parser');
const cors = require("cors");
const connectDB = require("./db/db");
const userRoutes = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");

connectDB();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("helo world");
});

app.use("/users", userRoutes);

module.exports = app;
