import { productData } from './products.js';
import { productArray } from './product-array.js';

const productImageTags = document.querySelectorAll('img');
const productRadioTags = document.querySelectorAll('input');
const productName = document.getElementById('product-name');
const productTwo = document.getElementById ('product2-name');
const productThree = document.getElementById ('product3-name');
const submitButton = document.getElementById ('submit-button');

const products = new productArray(productData);

let showProducts;

productRadioTags.forEach((radioTag) => {
    radioTag.addEventListener('click', () => {
        
    
    });
});

const initializeNewProducts = () => {

    const randomProduct = products.getRandomProduct();
    let randomProduct2 = products.getRandomProduct();
    let randomProduct3 = products.getRandomProduct();
    if (randomProduct.id === randomProduct2) {
        randomProduct2 = products.getRandomProduct(); 
    } else if (randomProduct2 === randomProduct3) {
        randomProduct3 = products.getRandomProduct();
    } else if (randomProduct3 === randomProduct) {
        randomProduct = products.getRandomProduct();
    }

        
    
}