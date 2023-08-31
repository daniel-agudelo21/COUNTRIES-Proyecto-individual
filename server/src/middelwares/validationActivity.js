const { Activity } = require('../db')

const validationActivity = async (req, res, next) => {
    const { name } = req.body
    const activity = await Activity.findOne({
        where: {
            name
        }
    })
    if (activity) {
        next(new Error('Ese nombre ya está registrado'))
    } else {
        next()
    }
}

module.exports = validationActivity