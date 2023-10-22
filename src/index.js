import { fetchBreeds, fetchCatByBreed } from "./cat-api";

import SlimSelect from 'slim-select'
import Notiflix from 'notiflix';

const refs = {
    selector: document.querySelector('.breed-select'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
    divCatInfo: document.querySelector('.cat-info'),
}

const { selector, loader, error, divCatInfo } = refs;

refs.loader.style.visibility = 'hidden';
refs.error.style.visibility = 'hidden';





fetchBreeds()
    .then(data => {
        // console.log(data);
        refs.selector.insertAdjacentHTML("beforeend", breedMarkup);

        return data.map(({ id, name }) => ({ text: name, value: id }));
        
        new SlimSelect({
            select: selector,
        
            
})
    }).catch(onFetchError);

function breedMarkup(arr) {
    return arr
        .map(({ id, name }) => `<option value = "${id}">${name}</option>`).join('');
}


refs.selector.addEventListener('change', selectCat);


function selectCat(event) {
    event.preventDefault();
    refs.divCatInfo.innerHTML = '';

    let breedId = event.currentTarget.value;
    refs.loader.style.visibility = 'visible';
    refs.divCatInfo.style.visibility = 'hidden';
    

    fetchCatByBreed(breedId)
        
        .then(data => {
            const cat = data
                .map(({ url }) => {
                    return `<img src="${url}" alt="cat" width=500/>`;
                })
                .join('');
            refs.divCatInfo.insertAdjacentHTML('afterbegin', cat)
            
           
        })
    
}


function onFetchError(error) {
    refs.loader.style.visibility = 'hidden';
    refs.error.style.visibility = 'visible';

}