const connectDB = require("./db/connect");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

let corsOption = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOption));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/users", require("./routes/userRoutes"));

app.get("/", (req, res) => {
  res.json({ messaGE: "wELCOMW TO THE APP" });
});

const PORT = 8080;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log("Server is listening on", { PORT }));
  } catch (err) {
    console.log(err);
  }
};

start();
