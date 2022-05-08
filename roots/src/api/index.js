import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5001'});
const url = 'http://localhost:5001/companys';

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const fetchCompanys = () => axios.get(url);
export const createCompany = (newCompany) => API.post('/companys', newCompany);