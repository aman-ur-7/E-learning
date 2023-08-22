const express = require("express");
const App = express();
const dotEnv = require("dotenv");
const userRoutes = require("./Routes/UserRoutes");
const cors = require("cors");
const DataBase = require("./Config/Data");
//
const multer = require("multer");
const path = require("path");
//
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

//
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

App.post("/profile", upload.single("image"), function (req, res, next) {});
//
App.listen(PORT, () => {
  console.log("server is started");
});
