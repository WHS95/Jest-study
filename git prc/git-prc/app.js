const express = require("express");
const app = express();

const fs = require('fs');
const http = require("http");
const https = require("https");
const cookieParser = require("cookie-parser");
const indexRouter = require("./routes");
const ErrorHandler = require("./advice/ErrorHandler");

const options = {
  ca: fs.readFileSync('/etc/letsencrypt/live/bo-hyemi-an.shop/fullchain.pem'),
  key: fs.readFileSync('/etc/letsencrypt/live/bo-hyemi-an.shop/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/bo-hyemi-an.shop/cert.pem')
  };

//로그 관리를 위해 morgan 설치
const morgan = require("morgan");
app.use(morgan("dev"));

//보안과 가독성을 위해 환경변수사용
require("dotenv").config();

const cors = require("cors");
const corsOption = {
  origin: true,
  credentials: true,
};

app.use(cors(corsOption));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

app.use("/", indexRouter);

app.use(ErrorHandler);

http.createServer(app).listen(3000);
https.createServer(options, app).listen(443);


