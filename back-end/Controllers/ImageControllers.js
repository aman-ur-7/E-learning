const express = require("express");
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const uniqueId = uuidv4();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, uniqueId + file.originalname);
  },
});

// https://shamsher78619.medium.com/upload-image-mern-stack-via-multer-c9e4afca8726#:~:text=We%20would%20start%20up%20by,multer%20to%20the%20node%20application.&text=We%20will%20have%20a%20model,store%20the%20images%20being%20uploaded.
