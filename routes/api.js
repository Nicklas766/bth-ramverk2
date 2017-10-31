var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET users listing. */
router.get('/users', function(req, res) {
    res.json([
        {
            id: 1,
            username: "samsepi0l"
        }, {
            id: 2,
            username: "D0loresH4ze"
        }
    ]);
});


/* GET reports. */
const getFiles = () => {
    const files = ['kmom01', 'kmom02', 'kmom03', 'kmom04', 'kmom05', 'kmom06', 'kmom10'];

    return files.map((file, index) => file = {
        id: index,
        text: fs.readFileSync(`content/${file}.md`, "utf8"),
        name: file
    });
};

router.get(['/report'], function(req, res) {
    res.json(getFiles());
});
router.get(['/report/:id'], function(req, res) {
    res.json(getFiles()[req.params.id]);
});

module.exports = router;
