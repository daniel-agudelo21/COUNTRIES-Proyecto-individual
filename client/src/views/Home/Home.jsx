import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCountries, getActivity } from '../../redux/Actions/actions'
import Cards from "../../components/Cards/Cards"
import Navbar from "../../components/Navbar/Navbar"
import Filters from "../../components/Filters/Filters"
import Paginado from "../../components/Paginado/Paginado"
import style from './Home.module.css'


const Home = () => {
    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.allCountries)

    const [page, setPage] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)

    const countriesPerPage = 10
    const maxPages = Math.ceil((allCountries && allCountries.length) / countriesPerPage) || 1

    const paginatedCountries = allCountries.slice(
        (currentPage - 1) * countriesPerPage,
        currentPage * countriesPerPage
    )
    //handlers
    const handlePage = () => {
        setPage(1)
        setCurrentPage(1)
    }


    useEffect(() => {
        dispatch(getCountries())
        dispatch(getActivity())
    }, [dispatch])
    return (
        <div className={style.conteiner}>
            <div className={style.logo}>
                <h1>Countries</h1>
            </div>
            <div>
                <Navbar handlePage={handlePage} />
            </div>
            <div>
                <Filters handlePage={handlePage} />
            </div>
            <div>
                <Paginado
                    page={page}
                    setPage={setPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    maxPages={maxPages}
                />
            </div>
            <div>
                <Cards allCountries={paginatedCountries} />
            </div>

        </div>
    )
}

export default Home