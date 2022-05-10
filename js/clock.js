const clock = document.querySelector("h2#clock");

clock.innerText ="how are you?"

function sayHello(){
    console.log("hello");
}

setInterval(sayHello, 5000);
// sayHello() every 5sec