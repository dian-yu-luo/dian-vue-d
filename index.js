const express = require('express');
const cors = require('cors');
const path = require("path")
// 自定义路由
const routes = require('./routes');

const app = express();
const port = 9000;

app.use(cors());
app.use(express.static('dist'));
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(routes);
// 允许所有来源



app.get('/1', (req, res) => {
    res.send('Hello World!');
});

app.post("/api/main/analysis",
    (req, res) => {
        console.log(req.body.data);
        res.send("hello")
    }
)

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./dist/index.html"))
})

app.listen(port, () => {
    console.log(`Example app listening on http://127.0.0.1:${port}`);
});

// 同时启动两个项目,可以
/* const { spawn } = require("child_process");
const fs = require("fs");

const logFilePath = "python-daemon.log"; // 指定日志文件路径
const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });
const child = spawn("python", ["../dian-vue-py/main.py"]);
child.stdout.on('data', data => {
    const message = `stdout: ${data}`;
    console.log(message);
    logStream.write(`${message}\n`);
});
 */