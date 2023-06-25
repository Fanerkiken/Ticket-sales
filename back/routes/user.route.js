const { Router } = require("express");
const router = Router();
const userController = require("../controllers/user.controller");
const isAuth = require("../middleware/isAuth.middleware");

router.post("/registration", userController.create);
router.post("/login", userController.login);
router.get("/", userController.getAll);
router.get("/:id", userController.getById);

module.exports = router;
