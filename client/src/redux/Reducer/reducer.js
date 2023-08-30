import { FILTER_BY_ACTIVITY, FILTER_CONTINENT, GET_ACTIVITY, GET_BY_ID, GET_BY_NAME, GET_COUNTRIES, DELETE_DETAIL, POST_ACTIVITY, SORT_ALPHABET, SORT_POPULATION, GET_ACT_BY_ID } from "../Actions/actionTypes";

const initialState = {
    allCountries: [],
    countriesCopy: [],
    countryDetails: {},
    activities: [],
    activityDetail: {}
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
            console.log(state.countriesCopy);
            return {
                ...state,
                countryDetails: action.payload
            }

        case GET_ACT_BY_ID:

            return {
                ...state,
                activityDetail: action.payload
            }

        case DELETE_DETAIL:
            console.log(state.countryDetails);
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
        case FILTER_BY_ACTIVITY:
            console.log('filter by activity', action.payload);
            const filteredActivities = action.payload === 'all' ? state.countriesCopy : state.countriesCopy.filter((country)=>{
                let mappedActivities = country.Activities?.map(activity => activity.name)
                if (mappedActivities.includes(action.payload) ) {
                    return country
                }
            })
            return{
                ...state,
                allCountries: filteredActivities
            }
        case GET_ACTIVITY:
            console.log('estas son las actividades', state.activities);

            return {
                ...state,
                activities: action.payload
            }
        case POST_ACTIVITY:
            return {
                ...state,
                activities: [...state.activities, action.payload]
            }
        case SORT_ALPHABET:
            const allcountriesCopy = [...state.allCountries]
            return {
                ...state,
                allCountries: action.payload === "A"
                    ? allcountriesCopy.sort((a, b) => a.name.localeCompare(b.name))
                    : allcountriesCopy.sort((a, b) => b.name.localeCompare(a.name))
            }
        case SORT_POPULATION:
            const population = [...state.allCountries]
            return {
                ...state,
                allCountries: action.payload === "A"
                    ? population.sort((a, b) => a.population - b.population)
                    : population.sort((a, b) => b.population - a.population)
            }
        default:
            return state
    }
}

export default reducer