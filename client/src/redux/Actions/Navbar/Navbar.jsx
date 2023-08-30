import SearchBar from "../../../components/SearchBar/SearchBar"
import { NavLink } from "react-router-dom"
const Navbar = () => {

    return (
        <nav>
            <div>
                <SearchBar/>
            </div>
            <div>
                <NavLink to='/create'>
                    Create Activity
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar