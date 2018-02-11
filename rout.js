var express = require("express");
var router = express.Router();

// Home page route
router.get('/', function(req, res) {
  
  // var header = req.headers; //Get all headers.
  

  var obj = {
  ipaddress : req.headers['x-forwarded-for'].split(",")[0],  // get IP
  language : req.headers['accept-language'].split(",")[0],   // get language
  software : req.headers['user-agent'].split(/[()]+/)[1]     // get spftware.
  };
  
  res.send(obj);
  })



module.exports = router;