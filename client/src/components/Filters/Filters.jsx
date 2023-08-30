import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { filterByActivity, filterContinent, getActivity, sortByAlphabet, sortByPopulation } from "../../redux/Actions/actions"
import style from './Filters.module.css'
const Filters = ({ handlePage }) => {
    const dispatch = useDispatch()
    const activities = useSelector((state) => state.activities)


    //handlers
    const handleFilterContinet = (event) => {
        dispatch(filterContinent(event.target.value))
        handlePage(1)
    }

    const handleFilterActivity = (event) => {
        dispatch(filterByActivity(event.target.value))
        handlePage(1);
    };

    const handleSortAlphabet = (event) => {
        dispatch(sortByAlphabet(event.target.value))

    }

    const handleSortPopulation = (event) => {
        dispatch(sortByPopulation(event.target.value))
    }

    useEffect(() => {
        dispatch(getActivity())
    }, [dispatch])


    return (
        <div className={style.allContainer}>
            <div className={style.filter}>
                <div className={style.filterCountries}>
                    <label className={style.label} htmlFor="">Filter by countries</label>
                    <div>
                        <select className={style.select} name="" id="" onChange={handleFilterContinet} >
                            <option value="Todos">All Countries</option>
                            <option value="Africa">Africa</option>
                            <option value="Oceania">Oceania</option>
                            <option value="Europe">Europe</option>
                            <option value="Antarctica">Antarctica</option>
                            <option value="North America">North America</option>
                            <option value="South America">South America</option>
                            <option value="Asia">Asia</option>
                        </select>
                    </div>
                </div>
                <div className={style.filterActivity}>
                    <label className={style.label} htmlFor="">Filter by activities</label>
                    <div>
                        <select className={style.select} name="" id="" onChange={handleFilterActivity}>
                            <option value="all">Select activity</option>
                            {activities.map((activity) => (
                                <option key={activity.id} value={activity.name}>{activity.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className={style.order}>
                <div className={style.orderAlpha}>
                    <label className={style.label} htmlFor="">Order by name</label>
                    <div>
                        <select className={style.select} name="" id="" onChange={handleSortAlphabet}>
                            <option value="A">⇓ A - Z ⇓</option>
                            <option value="D">⇑ Z - A ⇑</option>
                        </select>
                    </div>
                </div>
                <div className={style.orderPopu}>
                    <label className={style.label} htmlFor="">Order by population</label>
                    <div>
                        <select className={style.select} name="" id="" onChange={handleSortPopulation}>
                            <option value="A">⇑ Smallest to Largest ⇑</option>
                            <option value="D">⇓ Largest to Smallest ⇓</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters