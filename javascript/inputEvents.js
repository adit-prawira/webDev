const input = document.querySelector('input');
const h1 = document.querySelector('h1');
const original = h1.innerHTML;

input.addEventListener('input', function(e){
    h1.innerText = input.value;
    if(input.value.length === 0){
        h1.innerText = original;
    }
})