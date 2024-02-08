const router = require("express").Router();
const userController = require("./user.controller");
const { validate } = require("./user.validator");
router.get("/", async (req, res, next) => {
  try {
    result = await userController.get();
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    result = await userController.getById(req.params.id);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.post("/", validate, async (req, res, next) => {
  try {
    result = await userController.create(req.body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.put("/:id", async (req, res, next) => {
  try {
    result = await userController.updateById(req.body, req.params.id);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.patch("/:id", async (req, res, next) => {
  try {
    result = await userController.updateById(req.body, req.params.id);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    result = await userController.removeById(req.params.id);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
