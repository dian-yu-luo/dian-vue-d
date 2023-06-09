const express = require('express');
const cors = require('cors');
const path =require("path")
// 自定义路由
const routes = require('./routes');

const app = express();
const port = 9000;

app.use(routes);
// 允许所有来源
app.use(cors());
app.use(express.static('dist'));
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get("*",function(req, res) {
    res.sendFile(path.join(__dirname,"./dist/index.html"))
})


app.get('/1', (req, res) => {
    res.send('Hello World!');
});

app.post("/api/main/analysis",
    (req, res) => {
        console.log(req.body.data);
        res.send("hello")
    }
)

app.listen(port, () => {
    console.log(`Example app listening on http://127.0.0.1:${port}`);
});
