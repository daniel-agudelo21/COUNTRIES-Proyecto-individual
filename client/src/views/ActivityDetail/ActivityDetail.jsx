import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { detailDelete, getActById } from "../../redux/Actions/actions"

const Detail = () => {
    const { id } = useParams()

    const dispatch = useDispatch()
    const activityDetail = useSelector((state) => state.activityDetail)
    

    useEffect(() => {
        dispatch(getActById(id))
        
    }, [id, dispatch])

    

    return (
        <div>
            <h1>Activity Detail</h1>
            <NavLink to='/home/'>Home</NavLink>
            {
                activityDetail ? (
                    <div key={activityDetail.id}>
                        <h2>Code: {activityDetail.id}</h2>
                        <h2>Name: {activityDetail.name}</h2>
                        <h2>Countries: </h2>
                        <ul>
                            {activityDetail.Countries?.map((country) => (
                                <li key={country.id}>
                                    <h2>{country.name}</h2>
                                    <h2>{country.capital}</h2>
                                    <img src={country.flag} alt="" />
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
