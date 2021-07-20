require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routers/ApodRouter"));
app.listen(process.env.PORT, () =>
  console.log(`It's alive on ${process.env.PORT}!`)
);

module.exports = app;
