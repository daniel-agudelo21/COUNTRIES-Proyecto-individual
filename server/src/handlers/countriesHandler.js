const getCountries = require('../controllers/getCountries')
const getCountryById = require('../controllers/getCountryById')

const getCountriesHandler = async (req, res) => {
    try {
        const { name } = req.query
        const response = await getCountries(name)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}


const getIdHandler = async (req, res) => {
    try {
        const { id } = req.params
        const response = await getCountryById(id)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

module.exports = {
    getCountriesHandler,
    getIdHandler,

}