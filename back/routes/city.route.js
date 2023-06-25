const {Router} = require("express");
const router = Router();
const cityController = require("../controllers/city.controller")
const isAuthMiddleware = require('../middleware/isAuth.middleware')

router.post('/', cityController.create)
router.get('/', cityController.getAll)
router.get('/:id', cityController.getById)

module.exports = router