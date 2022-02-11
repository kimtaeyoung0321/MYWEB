const API_KEY = "102d04450263df0660b12a55e6d46180";

function onGeo(tomato) {
  const lat = tomato.coords.latitude;
  const lon = tomato.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const whereIAm = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:nth-child(2)");
      const temp = document.querySelector("#weather span:last-child");
      whereIAm.innerText = `지역: ${data.name}`;
      weather.innerText = `날씨: ${data.weather[0].main}`;
      temp.innerText = `기온: ${data.main.temp}`;
    });
}
function onGeoError() {}
navigator.geolocation.getCurrentPosition(onGeo, onGeoError);
