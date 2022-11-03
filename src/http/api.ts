import axios, { AxiosInstance } from "axios"

export const api: AxiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/"
})
export const cowData: AxiosInstance = axios.create({
  baseURL: "https://sensor.test-cowmanager.com/cowmanager.api/web/cow/list/counts",
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
})
cowData.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem('jwt');

    if (token && config.headers!== undefined ) {
      config.headers.Authorization = `Bearer ${token}` ;
    } else {
      delete cowData.defaults.headers.common.Authorization;
    }
    return config;
  },

  error => Promise.reject(error)
);
