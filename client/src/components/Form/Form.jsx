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
        <div className={style.formContainer}>

            <header>
                <div className={style.title}>
                    <h1>Create tourism activity</h1>
                </div>
            </header>
            <section>
                <div className={style.form}>
                    <form action="" onSubmit={handleSubmit}>
                        <div >
                            {showErrors && <h4 className={style.showError}>{errors}</h4>}
                        </div>
                        <div className={style.containerName}>
                            <label className={style.label} htmlFor="name">Name</label>
                            <div className={style.name}>
                                <input className={style.input} type="text" id="name" name="name" value={activityInfo.name} onChange={handleChange} />
                            </div>
                        </div>
                        <div className={style.containerDificult}>
                            <label className={style.label} htmlFor="difficulty">Difficulty</label>
                            <div className={style.difficult}>
                                <input className={style.inputDif} type="radio" id="radio1" value='1' name='difficulty' onChange={handleChoose} /><label for="radio1" className={style.labelDif} htmlFor="radio1">1</label>
                                <input className={style.inputDif} type="radio" id="radio2" value='2' name='difficulty' onChange={handleChoose} /><label for="radio2" className={style.labelDif} htmlFor="radio2">2</label>
                                <input className={style.inputDif} type="radio" id="radio3" value='3' name='difficulty' onChange={handleChoose} /><label for="radio3" className={style.labelDif} htmlFor="radio3">3</label>
                                <input className={style.inputDif} type="radio" id="radio4" value='4' name='difficulty' onChange={handleChoose} /><label for="radio4" className={style.labelDif} htmlFor="radio4">4</label>
                                <input className={style.inputDif} type="radio" id="radio5" value='5' name='difficulty' onChange={handleChoose} /><label for="radio5" className={style.labelDif} htmlFor="radio5">5</label>
                            </div>
                        </div>
                        <div className={style.containerDuration}>
                            <label className={style.label} htmlFor="duration">Duration</label>
                            <div className={style.duration}>
                                <input className={style.inputHour} type="number" id="duration" name="duration" min="1" max="24" placeholder="hours" value={activityInfo.duration} onChange={handleChange} />
                            </div>
                        </div>
                        <div className={style.containerSeason}>
                            <label className={style.label} htmlFor="season">Season</label>
                            <div className={style.season}>
                                <input className={style.inputSeason} type="radio" name="season" value="Verano" id="Verano" onChange={handleChoose} />
                                <label className={style.labelSeason} htmlFor="Verano">☀️Summer</label>
                                <input className={style.inputSeason} type="radio" name="season" value="Otoño" id="Otoño" onChange={handleChoose} />
                                <label className={style.labelSeason} htmlFor="Otoño">🍂Autum</label>
                                <input className={style.inputSeason} type="radio" name="season" value="Invierno" id="Invierno" onChange={handleChoose} />
                                <label className={style.labelSeason} htmlFor="Invierno">⛄Winter</label>
                                <input className={style.inputSeason} type="radio" name="season" value="Primavera" id="Primavera" onChange={handleChoose} />
                                <label className={style.labelSeason} htmlFor="Primavera">🌸Spring</label>

                            </div>
                        </div>
                        <div className={style.containerCountry}>
                            <label className={style.label} htmlFor="">Country</label>
                            <div className={style.country}>
                                <select className={style.input} name="country" id="" value={activityInfo.country} onChange={handleSelect}>
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
                        <button className={style.buttonCreate} type="submit">CREATE</button>
                        <div className={style.remove}>
                            <ol>
                                {activityInfo.country?.map((country) => {
                                    return (
                                        <div key={country.id}>
                                            <div className={style.countryAdd} >
                                                <div className={style.countryName}>
                                                    <li className={style.countryAdd}>{allCountries.find(element => element.id === country).name}</li>
                                                </div>
                                                <div className={style.countryRemove}>
                                                    <button className={style.buttonRemove} value={country} type="button" onClick={(event) => handleRemove(event)} >Remove</button>
                                                </div>

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