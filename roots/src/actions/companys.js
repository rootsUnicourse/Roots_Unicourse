import * as api from '../api';

export const getCompanys = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCompanys();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

export const createCompany = (company) => async (dispatch) => {
    try {
        const { data } = await api.createCompany(company);
        dispatch({ type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}