const { Router } = require("express");
const { getActivityHandler, createActivityHandler, getActivityIdHandler } = require('../handlers/activityHandler')
const router = Router()

router.get('/', getActivityHandler)

router.post('/', createActivityHandler)

router.get('/:id', getActivityIdHandler)

module.exports = router