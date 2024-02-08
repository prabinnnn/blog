const router = require("express").Router();
const blogController = require("./blog.controller");
const { validate } = require("./blog.validator");
router.get("/", async (req, res, next) => {
  try {
    result = await blogController.get();
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    result = await blogController.getById(req.params.id);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.post("/", validate, async (req, res, next) => {
  try {
    result = await blogController.create(req.body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.put("/:id", async (req, res, next) => {
  try {
    result = await blogController.updateById(req.body, req.params.id);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.patch("/:id", async (req, res, next) => {
  try {
    result = await blogController.updateById(req.body, req.params.id);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    result = await blogController.removeById(req.params.id);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
