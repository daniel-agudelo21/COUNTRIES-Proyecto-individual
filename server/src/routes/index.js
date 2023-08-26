const { Router } = require("express");
const router = Router();
const countriesRouter = require('./countriesRouter')
const activityRouter = require('./activityRouter')

router.use("/countries", countriesRouter)
router.use("/activities", activityRouter)

module.exports = router;
