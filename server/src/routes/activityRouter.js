const { Router } = require("express");
const { getActivityHandler, createActivityHandler } = require('../handlers/activityHandler')
const router = Router()

router.get('/', getActivityHandler)

router.post('/', createActivityHandler)

module.exports = router