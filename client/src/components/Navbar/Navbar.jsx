import { useDispatch } from "react-redux";
import { filterContinent } from "../../redux/Actions/actions";
const Navbar = ({ handleChange, handleSubmit }) => {
    const dispatch = useDispatch()

    

    return (
        <nav>
            
            <div>
                <input type="search" placeholder="Buscar" onChange={handleChange} />
                <button type="submit" onClick={handleSubmit}>Buscar</button>
            </div>
        </nav>
    )
}

export default Navbar