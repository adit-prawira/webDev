const form = document.querySelector("form");
const groceryList = document.querySelector("#list");

form.addEventListener('submit', function(e){
    e.preventDefault();
    const productInput = form.elements.product;
    const qtyInput = form.elements.qty;

    addTweet(productInput.value, qtyInput.value);
    productInput.value = "";
    qtyInput.value = "";
})

const addTweet = (product, qty) =>{
    const newProduct = document.createElement('li');
    newProduct .append(`${qty}`);
    newProduct .append(` ${product}`);
    groceryList.append(newProduct );
}