import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { detailDelete, getById } from "../../redux/Actions/actions"

const Detail = () => {
    const { id } = useParams()

    const dispatch = useDispatch()
    const countryDetails = useSelector((state) => state.countryDetails)
    
const [expandedActivity, setExpandedActivity] = useState(null)

    const handleActivityClick = (activityId) => {
        if (expandedActivity === activityId) {
            setExpandedActivity(null)
        } else {
            setExpandedActivity(activityId)
        }
    }
    useEffect(() => {
        dispatch(getById(id))
        return ()=>dispatch(detailDelete())
    }, [id, dispatch])

    

    return (
        <div>
            <h1>Detail</h1>
            <NavLink to='/home/'>Home</NavLink>
            {
                countryDetails ? (
                    <div key={countryDetails.id}>
                        <h2>Code: {countryDetails.id}</h2>
                        <h2>Name: {countryDetails.name}</h2>
                        <img src={countryDetails.flag} alt="" />
                        <h2>Continent: {countryDetails.continent}</h2>
                        <h2>Capital: {countryDetails.capital}</h2>
                        <h2>Subregion: {countryDetails?.subregion}</h2>
                        <h2>Area: {countryDetails?.area}</h2>
                        <h2>Population: {countryDetails.population}</h2>
                        <h2>Activities: </h2>
                        <ul>
                            {countryDetails.Activities?.map((activity) => (
                                <li key={activity.id}>
                                    <strong onClick={() => handleActivityClick(activity.id)}> 
                                    <h3>{activity.name}</h3>
                                    </strong>
                                    {expandedActivity === activity.id && (
                                        <div>
                                            <p>Difficulty: {activity.difficulty}</p>
                                            <p>Duration: {activity.duration}</p>
                                            <p>Season: {activity.season}</p>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : ''

            }

        </div>
    )
}

export default Detail
