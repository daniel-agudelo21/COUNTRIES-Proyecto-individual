const { Activity, Country } = require('../db')

const getActivityId = async (id) => {
    const activityId = await Activity.findByPk(id, {
        include: Country
    })
    if (!activityId) throw new Error('No existe esta actividad')
    return activityId
}

module.exports = getActivityId