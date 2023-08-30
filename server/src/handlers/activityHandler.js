const createActivity = require("../controllers/createActivity")
const getActivities = require('../controllers/getActivities')
const getActivityId = require('../controllers/getActivityId')

const getActivityHandler = async (req, res) => {
    try {
        const response = await getActivities()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

const createActivityHandler = async (req, res) => {
    try {
        const { id, name, difficulty, duration, season, country } = req.body
        const response = await createActivity(id, name, difficulty, duration, season, country)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}


const getActivityIdHandler = async(req, res) => {
    try {
        const {id} = req.params
        const response = await getActivityId(id)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getActivityHandler,
    createActivityHandler,
    getActivityIdHandler
}