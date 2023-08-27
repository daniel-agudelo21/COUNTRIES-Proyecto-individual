import Card from "../Card/Card"

const Cards = ({allCountries}) => {
    const countriesList = allCountries
    return (
        <div>
            <h1>Componente Cards, que contienen:</h1>
            {
                countriesList?.map((country)=>{
                    return(
                        <Card
                        key={country.id}
                        country={country}
                        />
                    )
                })
            }
        </div>
    )
}

export default Cards
