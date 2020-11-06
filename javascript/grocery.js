const form= document.querySelector("form");
const groceryContainer = document.querySelector("#tweets");

form.addEventListener('submit', function(e){
    e.preventDefault();

    const productInput = tweetForm.elements.product;
    const qtyInput = tweetForm.elements.qty;

    addTweet(productInput.value, qtyInput.value);
    productInput.value = "";
    qtyInput.value = "";
})

const addTweet = (product, qty) =>{
    const newProduct = document.createElement('li');
    newProduct.innerText = `${qty} ${product}`;
    groceryContainer.appendChild(newProduct);
}