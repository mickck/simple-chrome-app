const images = ['0.jpg','1.jpg','2.jpg'];

const todayImages =Math.floor(Math.random()*images.length) ;

const bgImage = document.createElement("img");
bgImage.src =`img/${todayImages}.jpg`;

document.body.appendChild(bgImage);

//append (img)child in the body