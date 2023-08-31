const { Country } = require('../db')
const { Op } = require('sequelize')
const { Activity } = require('../db')
//*Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información.
const getCountries = async (name) => {
    let countries
    if (name) {
        countries = await Country.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            }
        })
        if (countries.length === 0) throw new Error(`El país con el nombre ${name} no existe`)
        console.log(countries);
    }
    else {
        countries = await Country.findAll({
            include: Activity
        }
        )
    }
    return countries
}

module.exports = getCountries