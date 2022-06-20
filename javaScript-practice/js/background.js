const images = [
    "first.jpg", "second.jpg"
];

const getImage = images[Math.floor(Math.random() * images.length)];

const setImage = document.createElement("img");

setImage.src = `images/${getImage}`;

console.log(`iamges/${getImage}`);
document.body.appendChild(setImage);