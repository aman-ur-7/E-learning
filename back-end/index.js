const express = require("express");
const App = express();
const dotEnv = require("dotenv");
const userRoutes = require("./Routes/UserRoutes");
const cors = require("cors");
const DataBase = require("./Config/Data");

// App.use();
App.use(express.json());
dotEnv.config();
App.use(cors());
DataBase();

App.use(function (err, req, res, next) {
  if (err) {
    res.status(500).json({ message: err });
  }
});

const PORT = process.env.PORT;

App.use("/user", userRoutes);

App.listen(PORT, () => {
  console.log("server is started");
});
