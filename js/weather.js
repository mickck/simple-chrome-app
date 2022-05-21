const API_KEY ="8a5cc6d29fee7d4736eae918eca65b0e";

function onGeoOk(position){

const lat =position.coords.latitude;
const lon = position.coords.longitude;
const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
fetch(url).then(response => response.json()).then((data)=>{
    const city = document.querySelector("#weather span:first-child");
    const weather = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    console.log(data.name, data.weather[0].main);
});
// js call the url when open the website

}
function onGeoError(){
    alert("Can't find the weather")
}
// navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
