import { GET_COUNTRIES, GET_BY_NAME, GET_BY_ID, FILTER_CONTINENT, FILTER_ACTIVITY } from "./actionTypes";
import axios from 'axios'

export const getCountries = () => {
    const URL = 'http://localhost:3001'
    return async (dispatch) => {
        try {
            const response = await axios(`${URL}/countries`)
            return dispatch({
                type: GET_COUNTRIES,
                payload: response.data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const getByName = (name) => {
    const URL = 'http://localhost:3001'
    return async (dispatch) => {
        try {
            const response = await axios(`${URL}/countries/?name=${name}`)
            return dispatch({
                type: GET_BY_NAME,
                payload: response.data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const getById = (id) => {
    const URL = 'http://localhost:3001'
    return async (dispatch) => {
        try {
            const response = await axios(`${URL}/countries/${id}`)
            return dispatch({
                type: GET_BY_ID,
                payload: response.data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const filterContinent = (continent) => {
    console.log(continent);
    return {
        type: FILTER_CONTINENT,
        payload: continent
    }
}

export const filterActivity = (activity) => {
    const URL = 'http://localhost:3001'
    return async (dispatch) => {
        try {
            const response = await axios(`${URL}/activities`)
            return dispatch({
                type: GET_BY_ID,
                payload: response.data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}