const mongoose = require("mongoose");

const connectDb = () => {
  return mongoose
    .connect(process.env.DB_URL_LIVE)
    .then((data) => {
      console.log(`Mongodb connect with server`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDb;

