const { Activity, Country } = require('../db')

const createActivity = async (id, name, difficulty, duration, season, country) => {
    const activity = await Activity.create({ id, name, difficulty, duration, season })

    

    if (country && country.length > 0) {
        const countries = await Country.findAll({
            where: {
                id: country
            }
        })
        await activity.setCountries(countries)
    }
    
    return activity
}

module.exports = createActivity
