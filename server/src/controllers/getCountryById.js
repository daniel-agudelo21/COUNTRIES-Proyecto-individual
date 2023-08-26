const { Country, Activity } = require('../db')


const getCountryById = async (id) => {
    id = id.toUpperCase()
    const countryId = await Country.findByPk(id, {
        include: Activity
    })

    if (!countryId) throw new Error('No existe ese país')
    return countryId
}

module.exports = getCountryById