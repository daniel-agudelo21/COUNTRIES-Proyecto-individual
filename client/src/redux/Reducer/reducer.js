import { FILTER_ACTIVITY, FILTER_CONTINENT, GET_BY_ID, GET_BY_NAME, GET_COUNTRIES } from "../Actions/actionTypes";

const initialState = {
    allCountries: [],
    countriesCopy: [],
    countryDetails: {},
    activities: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
                countriesCopy: action.payload
            }

        case GET_BY_NAME:
            return {
                ...state,
                allCountries: action.payload
            }
        case GET_BY_ID:
            return {
                ...state,
                countryDetails: action.payload
            }
        case FILTER_CONTINENT:
            const filteredCountries = state.countriesCopy.filter(
                (country) => country.continent === action.payload
            )
            return {
                ...state,
                allCountries: action.payload === 'Todos' ? state.countriesCopy : filteredCountries
            }
        case FILTER_ACTIVITY:
            return{
                
            }
        default:
            return state
    }
}

export default reducer