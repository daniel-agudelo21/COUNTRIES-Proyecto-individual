const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require('./src/db');
const URL = "http://localhost:5000/countries"
const PORT = 3001;

conn.sync({ force: true }).then(() => {
  server.listen(PORT, async () => {
    const allCountries = await Country.findAll()
    if (allCountries.length < 1) {
      const { data } = await axios(`${URL}`)
      const countries = data.map((country) => {
        return {
          id: country.cca3,
          name: country.name?.official,
          flag: country.flags?.png,
          continent: country.continents[0],
          capital: country.capital ? country.capital[0] : "No capital",
          subregion: country.subregion,
          area: country.area,
          population: country.population
        }
      })
      await Country.bulkCreate(countries)
      console.log('Countries Guardados');
    }

    console.log(`Server listening on port ${PORT}`);
  })
}).catch(error => console.error(error))
