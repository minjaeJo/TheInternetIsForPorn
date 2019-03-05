var express = require('express');
var router = express.Router();

const cheerio = require('cheerio');
const request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
    const url = "https://www.google.com/search?ei=Tp96XIOhFvTEmAXitoGwBA&q=gochu&oq=gochu&gs_l=psy-ab.3..0i67j0j0i67j0j0i203l6.21876.25499..25858...1.0..0.109.503.3j2......0....1..gws-wiz.....6..35i39j0i131.d_2DaNarQ64"
    res.send('respond with a resource');
});

module.exports = router;
