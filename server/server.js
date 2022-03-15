
// 모듈
const express = require('express');
const app = express();
// 라우팅
const home = require('./src/routes/home');
// 앱 세팅
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/', home); // use -> 미들 웨어를 등록해주는 메서드 


module.exports = app;