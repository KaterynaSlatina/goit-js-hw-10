import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import axios from "axios";
import SlimSelect from 'slim-select'


const refs = {
    selector: document.querySelector('.breed-select'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
    divCatInfo: document.querySelector('.cat-info'),
}

const { selector, loader, error, divCatInfo } = refs;

loader.classList.replace('.loader', 'is-hidden');
error.classList.add('is-hidden');
divCatInfo.classList.add('is-hidden');

let arrBreedsId = [];
