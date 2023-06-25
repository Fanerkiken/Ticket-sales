const { Router } = require("express");
const router = Router();
const usersPhoneController = require("../controllers/usersPhone.controller");

router.post("/addNumber", usersPhoneController.create);
router.get("/", usersPhoneController.getAll);

module.exports = router;
