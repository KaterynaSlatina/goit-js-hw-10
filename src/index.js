import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import SlimSelect from 'slim-select'
import "slim-select/dist/slimselect.css"
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
const select =  new SlimSelect({
    select: "#select",
})
    fetchBreeds()
    .then(data => {
        const options = data.map(({ id, name }) => ({ text: name, value: id }))
        select.setData(options);
    })
    .catch(onFetchError)
refs.selector.addEventListener('change', selectCat);

function selectCat(event) {
    event.preventDefault();
    refs.divCatInfo.innerHTML = '';

    let breedId = event.currentTarget.value;
    refs.loader.style.visibility = 'hidden';
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
     fetchBreeds()
        .then(data => {
            const selectedBreed = data.find(breed => breed.id === breedId);
            
           
            const infoDescription = selectedBreed.description;
            const infoTemperament = selectedBreed.temperament;
            const infoName = selectedBreed.name;
            
            const infoAboutCat = `<div class="cat-container">
                         <h1>${infoName}</h1>
                         <p>${infoDescription}</p>
                        <p><b>Temperament:</b> ${infoTemperament}</p>` 
            
            refs.divCatInfo.insertAdjacentHTML('beforeend', infoAboutCat);
            refs.divCatInfo.style.visibility = 'hidden';
            refs.divCatInfo.style.visibility = 'visible';
     })

}
    
    

function onFetchError(error) {
    refs.loader.style.visibility = 'hidden';
    refs.error.style.visibility = 'visible';
}