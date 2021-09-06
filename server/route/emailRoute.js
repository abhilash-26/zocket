const express = require("express");
const router = express.Router();

router.post("/subscribe", (req, res) => {
  res.send("hi");
});
module.exports = router;
