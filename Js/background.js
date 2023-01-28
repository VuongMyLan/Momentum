const images = [
    '01.png',
    '02.png',
    '03.png',
    '04.png',
    '05.png',
    '06.png',
    '07.png',
];

// const container = document.getElementById('container');
// console.log(container);

const chosenImg = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement('img');
bgImage.src = `img/${chosenImg}`;
document.body.appendChild(bgImage);
console.log(bgImage);
