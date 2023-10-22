import axios from "axios";
const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_J8vcnhGDQcx0EzpCBnkYsWplubKDkBqkaheBllTg73uOxKEXNJJiMt1EPpkDz43c';

export function fetchBreeds() {
   return axios
        .get(`${BASE_URL}/breeds?key=${API_KEY}`)
        .then(resp => resp.data)
        
    }
    
export function fetchCatByBreed(breedId) {
return axios
   .get(`${BASE_URL}/images/search?key=${API_KEY}&breed_ids=${breedId}`)
        .then(resp =>  resp.data)}