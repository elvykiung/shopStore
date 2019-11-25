const express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//add route here

//connect mongo db

const URL = process.env.ATLAS_URL;
mongoose.connect(URL || "mongodb://localhost/shopstore", {
  useCreateIndex: true,
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log(`db connected`);
});

//app listen

app.listen(PORT, () => console.log(`app listen to port ${PORT}`));
