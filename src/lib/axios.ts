import axios, { AxiosHeaders } from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3333/',
    withCredentials: false,
    
})
