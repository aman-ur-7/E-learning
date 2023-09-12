const express = require("express");
const App = express();
const dotEnv = require("dotenv");
const userRoutes = require("./Routes/UserRoutes");
const cors = require("cors");
const DataBase = require("./Config/Data");

//
// App.use(express.static("public"));

const multer = require("multer");
const path = require("path");
const FileSchema = require("./Model/FileSchema");
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
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

App.post("/uploads", upload.single("file"), async (req, res) => {
  FileSchema.create({ image: req.file.filename })
    .then((data) => res.send(data))
    .catch((e) => res.send(e));
});

App.get("/image", (req, res) => {
  FileSchema.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});
//
App.listen(PORT, () => {
  console.log("server is started");
});
