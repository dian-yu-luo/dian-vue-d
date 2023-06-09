const express = require('express');
const router = express.Router();

router.post(
    "/analysis", (req, res) => {
        res.send("this is post tion")
    }
)

module.exports = router;
