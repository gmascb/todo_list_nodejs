const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Hello Horld");
  res.send("Hello TODO API version 2.0");
});

module.exports = router;
