const router = require("express").Router();
const bookcontroller = require("./registration.controller");

router.post("/", async (req, res, next) => {
  try {
    result = await bookcontroller.create(req.body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
