var express = require('express');
var router = express.Router();

var markdown = require("markdown-js");
var fs = require("fs");


/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
  	id: 1,
  	username: "samsepi0l"
  }, {
  	id: 2,
  	username: "D0loresH4ze"
  }]);
});


/* GET home page. */
router.get('/report', function(req, res, next) {
    res.json([{
          id: 1,
          text: fs.readFileSync("content/kmom01.md", "utf8")
    },
    {
        id: 2,
        text: fs.readFileSync("content/kmom02.md", "utf8")
    },
    {
        id: 3,
        text: fs.readFileSync("content/kmom03.md", "utf8")
    },
    {
        id: 4,
        text: fs.readFileSync("content/kmom04.md", "utf8")
    },
    {
        id: 5,
        text: fs.readFileSync("content/kmom05.md", "utf8")
    },
    {
        id: 6,
        text: fs.readFileSync("content/kmom06.md", "utf8")
    },
    {
        id: 7,
        text: fs.readFileSync("content/kmom10.md", "utf8")
    },
    ]);
});
module.exports = router;
