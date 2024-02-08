require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const PORT = Number(process.env.PORT);
const mongoose = require("mongoose");
const indeOfRouter = require("./routes");
app.use(morgan("dev"));
app.use(express.json());
app.use("/", indeOfRouter);
mongoose.connect(process.env.DB).then(() => console.log("Connected!"));
app.listen(PORT, () => {
  console.log("app is runing");
});
