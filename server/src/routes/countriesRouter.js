const { Router } = require("express");
const { getCountriesHandler, getIdHandler } = require('../handlers/countriesHandler')
const router = Router()

router.get('/', getCountriesHandler)

router.get('/:id', getIdHandler)

module.exports = router 