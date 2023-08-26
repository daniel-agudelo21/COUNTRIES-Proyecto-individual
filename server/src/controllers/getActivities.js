const { Activity, Country } = require('../db')

const getActivities = async () => {
    const activities = await Activity.findAll({
        include: Country
    })
    return activities
}

module.exports = getActivities