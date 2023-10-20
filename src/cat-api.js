

export function fetchBreeds() {

    return fetch(`${BASE_URL}/breeds?key=${API_KEY}`)
        .then(resp => {
            // console.log(resp);
            if (!resp.ok) {
                throw new Error(resp.statusText);
            }

            return resp.json()
    })
    }


export function fetchCatByBreed(breedId) {

    return fetch(`${BASE_URL}/breeds?key=${API_KEY}&breed_ids=${breedId}`)
        .then(resp => {
            console.log(resp);
            if (!resp.ok) {
                throw new Error(resp.statusText);
            }

            return resp.json()
    })
    }
console.log(fetchBreeds);