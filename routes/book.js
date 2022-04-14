const router = require("express").Router();

router.get("/demo", (req, res) => {
  res.send("Books");
});

module.exports = router;
