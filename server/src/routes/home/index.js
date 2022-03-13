
// 모듈
const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl');

// Router
// Customer crud
router.get('/customer', ctrl.crud.customerList);
router.post('/customer', ctrl.crud.customerAdd);
router.delete('/customer/:id',ctrl.crud.customerDelete);

// 로그인, 회원가입 테스트용 api
router.post('/register', ctrl.login.register)
router.post('/login', ctrl.login.login )

module.exports = router;