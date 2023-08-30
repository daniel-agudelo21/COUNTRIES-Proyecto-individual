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

    // -----------------------css de form
    .formContainer {
        display: flex;
flex - direction: column;
place - content: center;
background: #709a7371;
border - radius: 20px;
border: 1px solid rgb(0, 0, 0);
width: 500px;
height: auto;
position: absolute;
top: 50 %;
left: 50 %;
transform: translate(-50 %, -40 %);

}



.title {
    text - align: center;
}

.label {
    font - size: large;
    font - weight: bold;
    justify - content: center;

}


.input {
    width: 300px;
    height: 33px;
    text - align: center;
    flex - shrink: 0;
    border: 1px dashed;
    border - radius: 5px;
    background: #76858d52;
}

.inputHour {
    width: 50px;
    height: 40px;
    text - align: center;
    flex - shrink: 0;
    border: none;
    border - radius: 50px;
    background: #76858D;
}

.inputHour::placeholder {
    color: rgb(60, 60, 65);


}

.containerName,
.containerDificult,
.containerDuration,
.containerSeason {

    margin: 10px 0 20px 0;
}

.containerCountry {

    margin: 10px;
}

.inputDif {
    display: none;
    text - align: center;
    flex - shrink: 0;
    border: none;
    border - radius: 50px;
    background: #76858D;
}

.labelDif {
    /* Estilos personalizados para el radio */
    display: inline - block;
    width: 20px;
    height: 20px;
    border - radius: 50 %;
    border: 2px solid #000;
    background - color: #fff;
    cursor: pointer;
}

.labelDif:hover {
    /* Estilos para cuando se pasa el mouse por encima */
    background - color: #f2f2f2;
}

.inputDif: checked +.labelDif {

    background - color: #709A73;
    border - color: #000;
}



.inputSeason {
    display: none;
}

.labelSeason {
    display: inline - flex;
    text - align: center;
    cursor: pointer;
    margin - bottom: 10px;

}

.labelSeason:before {
    content: "";
    display: inline - flex;
    margin: 0 auto;
    width: 20px;
    height: 20px;
    border - radius: 50 %;
    border: 2px solid black;
    margin - bottom: 5px;
}

.inputSeason: checked +.labelSeason:before {
    background - color: #519c56;
}

.buttonCreate {
    border: 1px solid #76858D;
    padding: 0.6em 1.2em;
    border - radius: 5px;
    background - color: #709A73;
    cursor: pointer;
    transition: border - color 0.25s;
}

.buttonCreate:hover {
    border - color: #2F3544;
    transform: scale(1.05);
}

.buttonCreate: focus,
.buttonCreate: focus - visible {
    outline: 4px auto - webkit - focus - ring - color;
}

.remove{
    border: 1px solid red;
    display: flex;
    flex - wrap: wrap;
    justify - content: space - around;
}
.countryAdd {
    flex - grow: 3;
    padding: 5px;
    margin: 5px;
}

.countryName {
    font - size: large;
    font - weight: bold;
}

.buttonRemove {
    border: 1px solid #8d7676;
    padding: 0.6em 1.2em;
    border - radius: 5px;
    background - color: #9a7370;
    cursor: pointer;
    transition: border - color 0.25s;
}

.buttonRemove:hover {
    border - color: #2F3544;
    transform: scale(1.05);
}

.buttonRemove: focus,
.buttonRemove: focus - visible {
    outline: 4px auto - webkit - focus - ring - color;
}