const {Router} = require("express");
const router = Router()
const pathsController = require('../controllers/paths.controller')

router.get('/', pathsController.getAll)
router.get('/:id', pathsController.getById)
router.post('/', pathsController.create)

module.exports = router

