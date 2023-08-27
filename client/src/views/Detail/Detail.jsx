import { useEffect } from "react"
import { NavLink, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getById } from "../../redux/Actions/actions"

const Detail = () => {
    const { id } = useParams()

    const dispatch = useDispatch()
    const countryDetails = useSelector((state) => state.countryDetails)

    useEffect(() => {
        dispatch(getById(id))

    }, [dispatch])

    return (
        <div>
            <h1>Detail</h1>
            <NavLink to='/home/'>Home</NavLink>
            {
                countryDetails ? (
                    <div key={countryDetails.id}>
                        <h2>Código: {countryDetails.id}</h2>
                        <h2>Nombre: {countryDetails.name}</h2>
                        <img src={countryDetails.flag} alt="" />
                        <h2>Continente: {countryDetails.continent}</h2>
                        <h2>Capital: {countryDetails.capital}</h2>
                        <h2>Subregión: {countryDetails?.subregion}</h2>
                        <h2>Area: {countryDetails?.area}</h2>
                        <h2>Poblacion: {countryDetails.population}</h2>
                    </div>
                ) : ''

            }

        </div>
    )
}

export default Detail
