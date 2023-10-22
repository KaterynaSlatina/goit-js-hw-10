import axios from "axios";

const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_J8vcnhGDQcx0EzpCBnkYsWplubKDkBqkaheBllTg73uOxKEXNJJiMt1EPpkDz43c';

const refs = {
    selector: document.querySelector('.breed-select'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
    divCatInfo: document.querySelector('.cat-info'),
}

export function fetchBreeds() {

    // return fetch(`${BASE_URL}/breeds?key=${API_KEY}`)
    //     .then(resp => {
    //         // console.log(resp);
    //         if (!resp.ok) {
    //             throw new Error(resp.statusText);
    //         }

    //         return resp.json()
    // })

    axios
        .get(`${BASE_URL}/breeds?key=${API_KEY}`)
        .then(resp => {
            console.log(resp);
            const breedMarkup = resp.data
                .map(({ id, name }) => {
                    return `optiom value = ${id}>${name}</option>`;
                }).join('');
            refs.selector.insertAdjacentHTML('beforeend', breedMarkup);
        })
        .catch(err => {
            console.log(err.message);
    })
    }


export function fetchCatByBreed(breedId) {
return axios
   .get(`${BASE_URL}/images/search?key=${API_KEY}&breed_ids=${breedId}`)
        .then(resp => {
            
            if (!resp.ok) {
                throw new Error(resp.statusText);
            }

            return resp.json()
    })
    }
