import { useState } from "react"
import { useDispatch } from "react-redux"
import { getByName } from "../../redux/Actions/actions"

const SearchBar = () => {
    const dispatch = useDispatch()
    const [searchCountry, setSearchCountry] = useState("")
    
    // handlers
    const handleChange = (event) =>{
        setSearchCountry(event.target.value)
    }

    const handleonSubmit = (event) =>{
        event.preventDefault()
        dispatch(getByName(searchCountry))
    }

    return(
        <div>
            <form action="" onSubmit={handleonSubmit}>
                <input type="search" placeholder="Search Country" value={searchCountry} onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar