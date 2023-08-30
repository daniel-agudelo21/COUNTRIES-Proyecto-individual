import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postActivity, getCountries } from "../../redux/Actions/actions"
import { NavLink, useNavigate } from "react-router-dom"
import FormValidation from "./FormValidation"
import style from './Form.module.css'

const Form = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const allCountries = useSelector((state) => state.allCountries)


    const [errors, setErrors] = useState('')
    const [showErrors, setShowErrors] = useState(false)
    const [activityInfo, setActivityInfo] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        country: []
    })


    useEffect(() => {
        dispatch(getCountries());

    }, [dispatch]);


    //handlers
    const handleSelect = (event) => {
        if (activityInfo.country.includes(event.target.value)) {
            console.log('ya está añadido este país');
        } else {
            setActivityInfo({
                ...activityInfo,
                country: [...activityInfo.country, event.target.value]
            })
        }

    }

    const handleChange = (event) => {
        setActivityInfo({
            ...activityInfo,
            [event.target.name]: event.target.value
        })
    }

    const handleChoose = (event) => {
        setActivityInfo({
            ...activityInfo,
            [event.target.name]: event.target.value
        })
    }

    const handleRemove = (event) => {
        setActivityInfo({
            ...activityInfo,
            country: activityInfo.country.filter((c) => (c !== event.target.value))

        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const validationErrors = FormValidation(activityInfo)
        if (Object.keys(validationErrors).length > 0) {
            setErrors(Object.values(validationErrors)[0])
            setShowErrors(true)
            return
        }

        dispatch(postActivity(activityInfo))
        setActivityInfo({
            name: '',
            difficulty: '',
            duration: '',
            season: '',
            country: []
        })
        alert(`La actividad ${activityInfo.name} fue creada exitosamente, dirigiéndote al home`)
        navigate('/home')
    }

    return (
        <div>
            
            <header>
                <div className={style.title}>
                    <h1>Create tourism activity</h1>
                </div>
            </header>
            <section>
                <div className={style.form}>
                    <form action="" onSubmit={handleSubmit}>
                        <div className={style.showError}>
                            {showErrors && <p type="error">{errors}</p>}
                        </div>
                        <div className={style.containerName}>
                            <label htmlFor="name">Name</label>
                            <div className={style.name}>
                                <input type="text" id="name" name="name" value={activityInfo.name} onChange={handleChange} />
                            </div>
                        </div>
                        <div className={style.containerDificult}>
                            <label htmlFor="difficulty">Difficulty</label>
                            <div className={style.difficult}>
                                <input type="radio" id="1" value='1' name='difficulty' onChange={handleChoose} /><label htmlFor="">1</label>
                                <input type="radio" id="2" value='2' name='difficulty' onChange={handleChoose} /><label htmlFor="">2</label>
                                <input type="radio" id="3" value='3' name='difficulty' onChange={handleChoose} /><label htmlFor="">3</label>
                                <input type="radio" id="4" value='4' name='difficulty' onChange={handleChoose} /><label htmlFor="">4</label>
                                <input type="radio" id="5" value='5' name='difficulty' onChange={handleChoose} /><label htmlFor="">5</label>
                            </div>
                        </div>
                        <div className={style.containerDuration}>
                            <label htmlFor="duration">Duration</label>
                            <div className={style.duration}>
                                <input type="number" id="duration" name="duration" min="1" max="24" placeholder="hours" value={activityInfo.duration} onChange={handleChange} />
                            </div>
                        </div>
                        <div className={style.containerSeason}>
                            <label htmlFor="season">Season</label>
                            <div className={style.season}>
                                <input type="radio" name="season" value="Verano" id="Verano" onChange={handleChoose} />
                                <label htmlFor="">☀️Summer</label>
                                <input type="radio" name="season" value="Otoño" id="Otoño" onChange={handleChoose} />
                                <label htmlFor="">🍂Autum</label>
                                <input type="radio" name="season" value="Invierno" id="Invierno" onChange={handleChoose} />
                                <label htmlFor="">⛄Winter</label>
                                <input type="radio" name="season" value="Primavera" id="Primavera" onChange={handleChoose} />
                                <label htmlFor="">🌸Spring</label>

                            </div>
                        </div>
                        <div className={style.containerCountry}>
                            <label htmlFor="">Country</label>
                            <div className={style.country}>
                                <select name="country" id="" value={activityInfo.country} onChange={handleSelect}>
                                    <option>Select country</option>
                                    {
                                        allCountries?.map((element) => {
                                            return (
                                                <option key={element.id} value={element.id}>{element.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <button type="submit">CREATE</button>
                        <div className={style.remove}>
                            <ol>
                                {activityInfo.country?.map((country) => {
                                    return (
                                        <div key={country.id}>
                                            <div >
                                                <li  className={style.countryAdd}>{allCountries.find(element => element.id === country).name}</li>
                                                <button className={style.butRemove} value={country} type="button" onClick={(event) => handleRemove(event)} >Remove</button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </ol>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Form