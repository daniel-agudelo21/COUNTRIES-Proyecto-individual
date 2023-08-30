import SearchBar from "../SearchBar/SearchBar"
import { NavLink } from "react-router-dom"
import style from './Navbar.module.css'
const Navbar = () => {

    return (
        <nav className={style.navContainer}>
            <div>
                <SearchBar />
            </div>
            <br />
            <div>
                <NavLink to='/create'>
                    <button className={style.button}>Create activity</button>
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar