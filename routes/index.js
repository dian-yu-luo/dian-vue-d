const express = require('express');
const router = express.Router();

// 加载其他路由文件
const usersRoutes = require('./users');
const memorize = require("./memorize")

// 注册其他路由
router.use('/users', usersRoutes);
router.use('/', memorize);

module.exports = router;
