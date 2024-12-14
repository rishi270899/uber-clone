const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cookie = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./db/db");
const userRoutes = require("./routes/userRoutes");
const captainRoutes = require("./routes/captain.routes");
const cookieParser = require("cookie-parser");

connectDB();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/users", userRoutes);
app.use("/captain", captainRoutes);

module.exports = app;
