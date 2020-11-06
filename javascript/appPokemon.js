const container = document.querySelector("#container");
const rawURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for(let i = 1; i<= 151; i++){
    const pokemon = document.createElement("div");
    const label = document.createElement("span");
    pokemon.classList.add("pokemon");
    label.innerText = `#${i}`;

    const newImg = document.createElement("img");
    newImg.src = `${rawURL}${i}.png`;

    pokemon.appendChild(newImg)
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}