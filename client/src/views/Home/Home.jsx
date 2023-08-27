import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getByName, getCountries, filterContinent } from '../../redux/Actions/actions'
import Cards from "../../components/Cards/Cards"
import Navbar from "../../components/Navbar/Navbar"

const Home = () => {
    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.allCountries)

    const [searchName, setSearchName] = useState('')

    const handleChange = (event) => {

        setSearchName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(getByName(searchName))
    }

    const handleContinetFilter = (event) => {
        dispatch(filterContinent(event.target.value))
        console.log(filterContinent());
    }

    useEffect(() => {
        dispatch(getCountries())
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
            <Cards allCountries={allCountries} />

        </div>
    )
}

export default Home