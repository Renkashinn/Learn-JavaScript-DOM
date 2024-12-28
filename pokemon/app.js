// https://raw.githubusercontent.com/PokeAPI/sprites/masker/sprites//pokemon/1.png

// https://th.bing.com/th/id/OIP.onCpIu5RpZfkmzlnHGAVnwHaHP?w=178&h=180&c=7&r=0&o=5&pid=1.7

const container = document.querySelector('#container');
const baseImgURL =
    'https://th.bing.com/th/id/OIP.onCpIu5RpZfkmzlnHGAVnwHaHP?w=178&h=180&c=7&r=0&o=5&pid=1.7';

for (let i = 1; i <= 500; i++) {
    const pokeBall = document.createElement('div');
    pokeBall.classList.add('pokemon');

    const imgPokemon = document.createElement('img');
    imgPokemon.src = `${baseImgURL}`
    // imgPokemon.scr = `${baseImgURL}${i}.png`;

    const label = document.createElement('span');
    label.innerText = `#${i}`;

    pokeBall.appendChild(imgPokemon);
    pokeBall.appendChild(label);
    container.appendChild(pokeBall);
}
