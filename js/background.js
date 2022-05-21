const images = ['0.jpg','1.jpg','2.jpg'];

const todayImages =Math.floor(Math.random()*images.length) ;

// const bgImage = document.createElement("img");
// bgImage.src =
document.body.style.backgroundImage =`url(img/${todayImages}.jpg)`;
console.log(`img/${todayImages}.jpg`);
//append (img)child in the body