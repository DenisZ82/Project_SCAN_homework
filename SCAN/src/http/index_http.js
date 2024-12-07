import axios from 'axios';

export const API_URL = 'https://gateway.scan-interfax.ru/api/v1/account'

const $api = axios.create({
    // withCredentials: true,
    baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localstorage.getItem('token')}`;
    return config;
});

export default $api;