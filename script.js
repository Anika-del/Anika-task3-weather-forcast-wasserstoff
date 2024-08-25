const apiKey = 'ca03744bbe4e7956c5f724d5337bf13d'

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const weatherIcon = document.querySelector(".weather-image > *");

const searchInput = document.querySelector('.search-box input');
const searchButton = document.querySelector('.search-box button');

const weather = document.querySelector('.weather');
const error = document.querySelector('.error')
// check weathe function
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status >= 400){
        error.style.display = 'block'
        weather.style.display = 'none'
    }
    const data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}`;
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + 'km/h';

    // Minimum and Maximum Temprature 
    document.querySelector('.min-temp').innerHTML = `Min: ${Math.round(data.main.temp_min)}°C`;
    document.querySelector('.max-temp').innerHTML = `Max: ${Math.round(data.main.temp_max)}°C`;
   

// conditions
    if(data.weather[0].main == "Clear"){
        weatherIcon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="5" stroke="#ffffff" stroke-width="1.5"></circle> <path d="M12 2V4" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 20V22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4 12L2 12" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M22 12L20 12" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M19.7778 4.22266L17.5558 6.25424" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4.22217 4.22266L6.44418 6.25424" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M6.44434 17.5557L4.22211 19.7779" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M19.7778 19.7773L17.5558 17.5551" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>`
    } else if(data.weather[0].main == "Rain"){
        weatherIcon.innerHTML = `<svg fill="#000000" viewBox="0 0 24 24" id="rain" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="secondary" d="M6,17v2m4-2v4m4-4v2m4-2v4" style="fill: none; stroke: #ffffff; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><path id="primary" d="M21,9a4,4,0,0,1-4,4H6A3,3,0,1,1,7.08,7.21a5,5,0,0,1,9-2.09A4.08,4.08,0,0,1,17,5,4,4,0,0,1,21,9Z" style="fill: none; stroke: #ffffff; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></g></svg>`
    } else if(data.weather[0].main == "Mist"){
        weatherIcon.innerHTML = `<svg fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M385.438,241.618c0-82.607-66.966-149.573-149.573-149.573S86.292,159.011,86.292,241.618 c-41.303,0-74.786,33.484-74.786,74.786h448.719C460.225,275.102,426.741,241.618,385.438,241.618z"></path> </g> </g> <g> <g> <path d="M385.438,23.011c-36.312,0-68.481,17.712-88.357,44.961c3.513,1.24,7,2.577,10.452,4.037 c21.925,9.275,41.609,22.543,58.505,39.438c16.895,16.895,30.164,36.579,39.438,58.505c5.728,13.543,9.773,27.579,12.105,41.971 c9.551,2.944,18.541,7.173,26.783,12.469c30.299-19.432,50.379-53.41,50.379-92.077C494.742,71.948,445.805,23.011,385.438,23.011 z"></path> </g> </g> <g> <g> <rect y="339.416" width="477.483" height="34.517"></rect> </g> </g> <g> <g> <rect y="454.472" width="477.483" height="34.517"></rect> </g> </g> <g> <g> <rect x="34.517" y="396.944" width="477.483" height="34.517"></rect> </g> </g> </g></svg>`
    } else if(data.weather[0].main == "Drizzle"){
        weatherIcon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.27126 16C4.31103 14.7751 3 12.5463 3 10C3 6.13401 6.02208 3 9.75 3C12.9907 3 15.698 5.36832 16.3503 8.52703C16.4351 8.9375 16.8309 9.22222 17.25 9.22222V9.22222C19.3211 9.22222 21 10.9633 21 13.1111C21 14.2576 20.5216 15.2882 19.7605 16" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> <path d="M10 15V16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13 16V17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10 19V20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13 20V21" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 19V20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 15V16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`
    } else if(data.weather[0].main == "Clouds"){
        weatherIcon.innerHTML = `<svg viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.cls-1{fill:none;stroke:#ffffff;stroke-miterlimit:10;stroke-width:1.91px;}</style></defs><path class="cls-1" d="M15.34,13h-.57a4.86,4.86,0,0,0,.09-.95,4.77,4.77,0,0,0-9.54,0,3.82,3.82,0,0,0,0,7.64h10a3.35,3.35,0,0,0,0-6.69Z"></path><path class="cls-1" d="M18.64,16.77h.52a3.34,3.34,0,0,0,0-6.68h-.57a5.88,5.88,0,0,0,.09-.95A4.77,4.77,0,0,0,9.51,7.27"></path></g></svg>`
    } else{
        weatherIcon.innerHTML = `<svg viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.cls-1{fill:none;stroke:#ffffff;stroke-miterlimit:10;stroke-width:1.91px;}</style></defs><path class="cls-1" d="M15.34,13h-.57a4.86,4.86,0,0,0,.09-.95,4.77,4.77,0,0,0-9.54,0,3.82,3.82,0,0,0,0,7.64h10a3.35,3.35,0,0,0,0-6.69Z"></path><path class="cls-1" d="M18.64,16.77h.52a3.34,3.34,0,0,0,0-6.68h-.57a5.88,5.88,0,0,0,.09-.95A4.77,4.77,0,0,0,9.51,7.27"></path></g></svg>`
    }
    
    error.style.display = 'none';
    weather.style.display = 'block';
}



searchButton.addEventListener("click", () => {
    checkWeather(searchInput.value);
    searchInput.value = "";
});

searchInput.addEventListener("keydown", (e) => {
    if(e.keyCode === 13){
    checkWeather(searchInput.value);
    searchInput.value = "";
}
});

// 5-days forcast weather temperetaur
