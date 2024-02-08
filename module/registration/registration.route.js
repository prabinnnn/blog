const router = require("express").Router();
const bookController = require("./registration.controller");
router.post("/", async (req, res, next) => {
  try {
    result = await bookController.resigrater(req.body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.post("/", async (req, res, next) => {
  try {
    result = await bookController.create(req.body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
