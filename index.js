const express = require('express');
const cors = require('cors');

const app = express();
const port = 9000;

// 允许所有来源
app.use(cors());

app.get('/1', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
