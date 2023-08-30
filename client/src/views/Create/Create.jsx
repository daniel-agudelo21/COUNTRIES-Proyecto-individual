import { NavLink } from "react-router-dom"
import Form from "../../components/Form/Form"
import style from './Create.module.css'
const Create = () => {
    return (
        <div className={style.create}>
            <h1>Create</h1>
            <div className={style.home}>
                <NavLink to='/home'>Home</NavLink>
            </div>
            <div className={style.form}>
                <Form />
            </div>
        </div>
    )
}

export default Create