// ----------------------HOME--------------------------------------
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getByName, getCountries, filterContinent, getActivity, filterCountryByActivity } from '../../redux/Actions/actions'
import Cards from "../../components/Cards/Cards"
import Navbar from "../../components/Navbar/Navbar"

const Home = () => {
    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.allCountries)
    const activities = useSelector((state) => state.activities)
    const filteredCountries = useSelector((state) => state.filteredCountries)

    const [searchName, setSearchName] = useState('')
    const [selectedActivity, setSelectedActivity] = useState('')

    const handleChange = (event) => {
        setSearchName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(getByName(searchName))
    }

    const handleContinetFilter = (event) => {
        dispatch(filterContinent(event.target.value))

    }

    const handleActivityFilter = (event) => {

        setSelectedActivity(event.target.value)
        dispatch(filterCountryByActivity(event.target.value))
    }

    useEffect(() => {
        console.log(allCountries);
        console.log(getCountries());
        dispatch(getCountries())
        dispatch(getActivity())
    }, [dispatch])
    return (
        <div>
            <h1>Home</h1>

            <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
            <select name="" id="" onChange={handleContinetFilter}>
                <option value="Todos">Todos</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
                <option value="Europe">Europa</option>
                <option value="Antarctica">Antartica</option>
                <option value="North America">Norte America</option>
                <option value="South America">Sur America</option>
                <option value="Asia">Asia</option>
            </select>
            <select name="" id="" onChange={handleActivityFilter}>
                <option value="">Todas las actividades</option>
                {activities.map((activity) => (
                    <option key={activity.id} value={activity.id}>{activity.name}</option>
                ))}
            </select>
            <Cards
                allCountries={allCountries}
                activities={activities}
                selectedActivity={selectedActivity}
            />

        </div>
    )
}

export default Home

    // --------------------------FILTRO DE ACTIVIDADES 
    < select name = "" id = "" onChange = { handleActivityFilter } >
        <option value="">Todas las actividades</option>
{
    activities.flatMap((activity) => (
        activity.Countries.flatMap((country) => (
            <option key={activity.id} value={country.id}>{activity.name}</option>
        ))
    ))
}
            </select >

//------------------------------FILTRO DE ACTIVIDADES 1ERO
{
    activities.map((activity) => (
        <option key={activity.id} value={activity.id}>{activity.name}</option>
    ))
}

// ---------------Filtro con const
const filteredActivities = activities.filter((activity) => {
    if (activity.Countries && activity.Countries[0] !== undefined)
        return activity.Countries
})

const aviableActivities = filteredActivities.map((activity) => activity.Countries[0]['name'])
const noRepActivities = aviableActivities.filter((country, index) => {
    return aviableActivities.indexOf(country) === index
})

//--------------filter continent reducer
const filteredCountries = state.countriesCopy.filter(
    (country) => country.continent === action.payload
)
return {
    ...state,
    allCountries: action.payload === 'Todos' ? state.countriesCopy : filteredCountries
}

//------------------activity en Countries
const countryActivities = activities.filter(activity => activity.Countries.some(country => country.id === id))