import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = 'https://pokeapi.co/api/v2/';

const baseAxios = axios.create({
    baseURL: BASE_URL
});

const api = (() => {
    const get = (url: string, config?: AxiosRequestConfig<any> | undefined) => baseAxios.get(url, config);

    return { get };
})();

export default api;
