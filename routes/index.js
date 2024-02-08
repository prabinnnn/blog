const router = require("express").Router();
const blogRouter = require("../module/blogs/blog.route");
const userRouter = require("../module/users/user.route");
const registrationRouter = require("../module/registration/registration.route");
router.use("/api/v3/gegisters", registrationRouter);
router.use("/api/v2/blogs", blogRouter);
router.use("/api/v1/users", userRouter);
module.exports = router;
