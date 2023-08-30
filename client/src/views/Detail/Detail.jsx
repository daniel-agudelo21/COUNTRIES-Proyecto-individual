import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { detailDelete, getById } from "../../redux/Actions/actions"
import style from './Detail.module.css'

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
        return (() => dispatch(detailDelete()))
    }, [id, dispatch])



    return (
        <div className={style.space}>

            <div className={style.container}>
                <NavLink to='/home/' className={style.return}><svg className={style.imgSvg} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1024 1024"><path fill="currentColor" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"/><path fill="currentColor" d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"/></svg></NavLink>
                <div>
                    <h1 className={style.name}>{countryDetails.name}'s detail</h1>
                    {
                        countryDetails ? (
                            <div className={style.detail} key={countryDetails.id}>

                                
                                <img className={style.img} src={countryDetails.flag} alt="" />
                                <h2 className={style.capital}>Capital: {countryDetails.capital}</h2>
                                <h2 className={style.continent}>Continent: {countryDetails.continent}</h2>
                                <h2 className={style.capital}>Subregion: {countryDetails?.subregion}</h2>
                                <h2 className={style.capital}>Population: {countryDetails.population}</h2>
                                <h2 className={style.capital}>Area: {countryDetails?.area}</h2>
                                <h2 >Activities: </h2>
                                <ul>
                                    {countryDetails.Activities?.map((activity) => (
                                        <li className={style.activity} key={activity.id}>
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

            </div>
        </div>
    )
}

export default Detail
