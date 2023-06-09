const express = require('express');
const router = express.Router();

// 加载其他路由文件
const usersRoutes = require('./users');
const repeatWordRoutes = require("./repeatword")

// 注册其他路由
router.use('/users', usersRoutes);
router.use('/repeat', repeatWordRoutes);

module.exports = router;
