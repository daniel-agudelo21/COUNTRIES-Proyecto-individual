const { Router } = require("express");
const { getActivityHandler, createActivityHandler, getActivityIdHandler } = require('../handlers/activityHandler');
const validationActivity = require("../middelwares/validationActivity");

const router = Router()

router.get('/', getActivityHandler)

router.post('/', validationActivity, createActivityHandler)

router.get('/:id', getActivityIdHandler)

module.exports = router