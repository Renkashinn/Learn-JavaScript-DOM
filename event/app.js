// const button = document.querySelector('#clickme');

// button.onclick = function () {
//     console.log('You clicked me');
// };

// const scream = () => {
//     console.log('Dont touch me');
// };

// button.onmouseover = scream;

// const eventbtn = document.querySelector('#eventbtn');
// eventbtn.addEventListener('click', stepSatu)
// eventbtn.addEventListener('click', stepDua)

// function stepSatu () {
//     console.log('step satu')
// }

// function stepDua () {
//     console.log('step dua')
// }

// eventbtn.onclick = stepSatu
// eventbtn.onclick = stepDua

// const form = document.querySelector('#form');
// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     console.log('submitted form');
// });

// document.querySelector('a').addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('harusnya ke google')
// });

// const form = document.querySelector('#form');
// const input = document.querySelector('input');
// const list = document.querySelector('#notes');

// input.addEventListener('change', (e) => {
//     console.log('Nilai Berubah');
// });

// input.addEventListener('input', (e) => {
//     document.querySelector('h1').innerText = input.value;
//     console.log('Nilai berhasil diinput');
// });

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const noteValue = input.value;
//     const newList = document.createElement('li');
//     newList.innerText = noteValue;
//     list.append(newList);
//     input.value = '';
// });

const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

button.addEventListener('click', function (e) {
    container.style.backgroundColor = generateRandomColor();
    e.stopPropagation();
});

container.addEventListener('click', function () {
    container.classList.toggle('hide');
});

const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
};
