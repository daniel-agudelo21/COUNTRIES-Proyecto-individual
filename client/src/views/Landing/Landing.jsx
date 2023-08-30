import style from './Landing.module.css'
import { NavLink } from 'react-router-dom'

const Landing = () => {
    return (
        <div>
            <div className={style.overlay}>
                <div>
                    <div className={style.projectTitleContainer}>
                        <h1 className={style.projectTitle}>Countries</h1>
                    </div>
                    
                    <div className={style.buttonContainer}>
                        <NavLink to="/home">
                            <button className={style.landingButton}>Come in!</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Landing