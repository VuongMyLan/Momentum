const API_KEY = '1849c7fe1108b50494d314f992a5a4e4';

function success(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector('#weather span:first-child');
            const city = document.querySelector('#weather span:last-child');
            weather.innerText = data.name;
            city.innerText = data.weather[0].main;
        });
}

function error() {
    alert('No weather found!');
}

navigator.geolocation.getCurrentPosition(success, error);
