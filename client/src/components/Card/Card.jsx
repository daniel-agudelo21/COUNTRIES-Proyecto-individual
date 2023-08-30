import style from './Card.module.css'
import { Link } from 'react-router-dom'
const Card = ({ id, name, continent, flag }) => {



    return (
        <div className={style.container}>

            <div >
                <Link to={`/home/${id}`}>
                    <div className={style.card}>
                        <img className={style.img} src={flag} alt={name} />
                        <h2 className={style.name}>{name}</h2>
                        <h3 className={style.continent}>{continent}</h3>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Card
