const express = require('express');
const router = express.Router();

router.post(
    "/analysis", (req, res) => {
        res.send("111111")
        console.log(req.body.data);
    }
)

module.exports = router;
