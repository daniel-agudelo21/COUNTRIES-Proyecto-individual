import style from './Cards.module.css'
import Card from "../Card/Card"

const Cards = ({ allCountries}) => {
    return (
        <div className={style.list}>

            {
                allCountries.map(({ id, name, continent, flag }) => {
                    return (
                        <Card
                            key={id}
                            id={id}
                            name={name}
                            flag={flag}
                            continent={continent}
                            
                        />
                    )
                })
            }
        </div>
    )
}

export default Cards
