const {Router} = require("express");
const router = Router();
const timetableController = require("../controllers/timetable.controller")

router.post('/', timetableController.create)
router.get('/', timetableController.getAll)
router.get('/:id', timetableController.getById)
router.get('/city/p', timetableController.getByCityId)

module.exports = router