import { Link } from 'react-router-dom'
const Card = ({ country }) => {
    const { name, continent, flag, id } = country
    return (
        <div>
            <h1>Card de : {id}</h1>
            <div>
                <Link to={`/home/${id}`}>
                    <img src={flag} alt={name} />
                    <h2>{name}</h2>
                    <h3>{continent}</h3>
                </Link>
            </div>
        </div>
    )
}

export default Card
