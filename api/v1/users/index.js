const router = require("express").Router();

router.post("/login", require("./login"));
router.post("/signup", require("./signup"));
router.put("/forgotPassword", require("./forgotPassword"));

module.exports = router;
