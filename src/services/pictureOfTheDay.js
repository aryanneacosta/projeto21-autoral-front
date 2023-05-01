import axios from "axios";

const BASE_URL = process.env.REACT_APP_NASA_ENDPOINT;
const API_KEY = process.env.REACT_APP_NASA_API_KEY;

function getImage() {
    const promise = axios.get(`${BASE_URL}=${API_KEY}`);
    return promise;
};

export { getImage };