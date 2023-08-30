import { GET_COUNTRIES, GET_BY_NAME, GET_BY_ID, FILTER_CONTINENT, FILTER_BY_ACTIVITY, GET_ACTIVITY, DELETE_DETAIL, POST_ACTIVITY, SORT_POPULATION, SORT_ALPHABET,GET_ACT_BY_ID } from "./actionTypes";
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

export const getActById = (id) => {
    const URL = 'http://localhost:3001'
    return async (dispatch) => {
        try {
            const response = await axios(`${URL}/activities/${id}`)
            return dispatch({
                type: GET_ACT_BY_ID,
                payload: response.data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const detailDelete = () => {

    return {
        type: DELETE_DETAIL,
        payload: {}
    }
}

export const filterContinent = (continent) => {
    return {
        type: FILTER_CONTINENT,
        payload: continent
    }
}



export const getActivity = () => {
    const URL = 'http://localhost:3001';
    return async (dispatch) => {
        try {
            const response = await axios(`${URL}/activities`);
            return dispatch({
                type: GET_ACTIVITY,
                payload: response.data,
            });
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const filterByActivity = (activity) => {
    
    return {
        type: FILTER_BY_ACTIVITY,
        payload: activity
    }
}

export const postActivity = (activity) => {
    const URL = 'http://localhost:3001';
    return async (dispatch) => {
        try {
            const response = await axios.post(`${URL}/activities`, activity);
            return dispatch({
                type: POST_ACTIVITY,
                payload: response.data,
            });
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const sortByAlphabet = (order) => {
    return {
        type: SORT_ALPHABET,
        payload: order
    }
}

export const sortByPopulation = (order) => {
    return {
        type: SORT_POPULATION,
        payload: order
    }
}