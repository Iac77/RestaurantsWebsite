const express = require("express");

const router = express.Router();

router.get("/", function (req, res) {
    //old code
    //const htmlFilePath = path.join(__dirname, "views", "index.html");
    //res.sendFile(htmlFilePath);
  
    res.render("index");
  });
  

  router.get("/about", function (req, res) {
    res.render("about");
  });

  module.exports = router;
  