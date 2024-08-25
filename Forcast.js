const APIkey = '713127e45178ba0f5a1e551fd77a5b80';


const temp = $('#temp');
const wind = $('#wind');
const humidity = $('#humidity');
const cityNameTitle = $('#cityTitle')
const cNameRep = $('#cityNameReplacer');


function mainMaster() {
    
    var city = $('#floatingInput').val();
    cityNameTitle.text(` ${city} Current Weather Conditions`);    
    localStorage.setItem('recentSearch', city);
    //futureaReq();
    const reqURL =  "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
    if(city == null){
        console.log('err');
    } else {
        fetch(reqURL) 
        .then((res) => {
            return res.json();
        })
        .then((data)=>{
            cNameRep.html(`${city}`);
            let weatherData = {
                    temp: data.main.temp,
                    wind: data.wind.speed,
                    humidity: data.main.humidity,
                    lat: data.coord.lat,
                    lon: data.coord.lon
                }
            render(weatherData);
            callAllFiveDaysData();
        })
    }
        
        searchedList(city);
        
}

$('#search').on('click' ,mainMaster)

function doThis(x) {
    console.log(x);
    $('#floatingInput').val(x);
    mainMaster();
}

function searchedList(searchedCity) {
    if(localStorage.getItem('searchedCities') == undefined) {
        var x = [''];
        x.push(searchedCity);
        localStorage.setItem('searchedCities', JSON.stringify(x));
        $('#buttonHolder').html('');
        for(var up of x) {
            if(up != '') {
                $('#buttonHolder').append(`<button class="btn btn-primary" onclick="doThis(this.name)" name="${up}" type="button" id="city" style="width: 100%; margin: 8px;">${up}</button>`);
            }
        }
        
    } else {
        var x = [''];
        x = JSON.parse(localStorage.getItem('searchedCities'));
        x.push(searchedCity);
        localStorage.setItem('searchedCities', JSON.stringify(x));
        $('#buttonHolder').html('');
        for(var up of x) {
            if(up != '') {
                $('#buttonHolder').append(`<button class="btn btn-primary" onclick="doThis(this.name)" name="${up}" type="button" id="city"  style="width: 100%; margin: 8px;">${up}</button>`);
            }
        }
    }
}


function callAllFiveDaysData() {
    var city = $('#floatingInput').val();
    cityNameTitle.text(` ${city} Current Weather Conditions`);    
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&appid=b4c630bbd5870696fdb109661959a6f8`).then(res => {
        return res.json();
    }).then((data) => {
        for(var x in data.list) {
            console.log('One of them');
            replaceData(x, data.list[x]);
        }
    });
}


function replaceData(index, listMan){
    console.log(listMan);
    // Previous Day 1
    if(index == 0) {
        var tem = $('#boxOneTemp');
        var w = $('#boxOneWind');
        var h = $('#boxOneHum');
        tem.html(`${Math.round(listMan.main.temp - 273.15)}`);
        w.html(`${listMan.wind.speed}`);
        h.html(`${listMan.main.humidity}`);
        var ep = listMan.dt_txt.split(' ');
        $('#dateOne').html(`${ep[0]}`);

    } else if(index == 1) {
        var tem = $('#boxTwoTemp');
        var w = $('#boxTwoWind');
        var h = $('#boxTwoHum');
        tem.html(`${Math.round(listMan.main.temp - 273.15)}`);
        w.html(`${listMan.wind.speed}`);
        h.html(`${listMan.main.humidity}`);
        var ep = listMan.dt_txt.split(' ');
        $('#dateTwo').html(`${ep[0]}`);
        
    } else if(index == 2) {
        var tem = $('#boxThreeTemp');
        var w = $('#boxThreeWind');
        var h = $('#boxThreeHum');
        tem.html(`${Math.round(listMan.main.temp - 273.15)}`);
        w.html(`${listMan.wind.speed}`);
        h.html(`${listMan.main.humidity}`);
        var ep = listMan.dt_txt.split(' ');
        $('#dateThree').html(`${ep[0]}`);
        
    } else if(index == 3) {
        var tem = $('#boxFourTemp');
        var w = $('#boxFourWind');
        var h = $('#boxFourHum');
        tem.html(`${Math.round(listMan.main.temp - 273.15)}`);
        w.html(`${listMan.wind.speed}`);
        h.html(`${listMan.main.humidity}`);
        var ep = listMan.dt_txt.split(' ');
        $('#dateFour').html(`${ep[0]}`);
        
    } else if(index == 4) {
        var tem = $('#boxFiveTemp');
        var w = $('#boxFiveWind');
        var h = $('#boxFiveHum');
        tem.html(`${Math.round(listMan.main.temp - 273.15)}`);
        w.html(`${listMan.wind.speed}`);
        h.html(`${listMan.main.humidity}`);
        var ep = listMan.dt_txt.split(' ');
        $('#dateFive').html(`${ep[0]}`);
        
    }

}

    function render(weatherData){
        
        let weather = weatherData;
        let cityTemp = Math.round(weather.temp - 273.15);
        let cityWind = weather.wind;
        let cityHumidity = weather.humidity;
        
        
        temp.html(` ${cityTemp}°C`);
        wind.text(` ${cityWind}/mph`);
        humidity.text(` ${cityHumidity}%`);
    }

    
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossorigin="anonymous"