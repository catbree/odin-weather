let apiKey = '53a7f8d7bc774287a2c104902241704';

let selectedCity = 'singapore';
let selectedUnit = 'celsius';

class Weather {
    constructor(city, time, condText, condCode, tempC, tempF, ppt, uv) {
        this.city = city;
        this.time = time;
        this.condText = condText;
        this.condCode = condCode;
        this.tempC = tempC;
        this.tempF = tempF;
        this.ppt = ppt;
        this.uv = uv;
    }
}

const weatherFocus = new Weather();


async function fetchForecastWeather() {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${selectedCity}&days=3`, {mode: 'cors'});
        const weatherData = await response.json();
        
        console.log(weatherData);

        weatherFocus.city = weatherData.location.name;
        weatherFocus.time = weatherData.location.localtime.substr(10, 6);
        weatherFocus.condText = weatherData.current.condition.text;
        weatherFocus.condCode = weatherData.current.condition.code;
        weatherFocus.tempC = weatherData.current.temp_c;
        weatherFocus.tempF = weatherData.current.temp_f;
        weatherFocus.ppt = weatherData.current.precip_mm;
        weatherFocus.uv = weatherData.current.uv;

        displayController.displayWeatherData();


    } catch {
        console.log('error');
    }
}

fetchForecastWeather();
console.log(weatherFocus);

const userControls = (function() {
    const searchBar = document.querySelector(".searchBar");
    const searchBtn = document.querySelector(".searchBtn");

    searchBtn.onclick = () => {
        selectedCity = searchBar.value;
        console.log(selectedCity);
        fetchForecastWeather();
        searchBar.value='';


    }
})();


const displayController = (function() {
    const city = document.querySelector('.city')
    const localTime = document.querySelector('.localTime');
    const conditionIcon = document.querySelector('.conditionIcon');
    const conditionText = document.querySelector('.conditionText');
    const ppt = document.querySelector('.ppt')
    const uvIndex = document.querySelector('.uvIndex')
    const temperature = document.querySelector('.temperature');

    const displayWeatherData = () => {
        city.textContent = weatherFocus.city;
        localTime.textContent = weatherFocus.time;
        
        determineConditionIcon();
        conditionIcon.src = iconSrc;

        conditionText.textContent = weatherFocus.condText;
        ppt.textContent = weatherFocus.ppt;
        uvIndex.textContent = weatherFocus.uv;
        temperature.textContent = weatherFocus.tempC;

    }

    let iconSrc = '';

    const determineConditionIcon = () => {
        switch(weatherFocus.condCode) {
            case 1000:
                iconSrc = 'assets/clear-day.svg'
                break;
            case 1003:
                iconSrc = 'assets/cloudy.svg'
                break;
            case 1006:
                iconSrc = 'assets/cloudy.svg'
                break;
            case 1009:
                iconSrc = 'assets/cloudy.svg'
                break;
            case 1030:
                iconSrc = 'assets/smoke.svg'
                break;
            case 1063:
                iconSrc = 'assets/rain.svg'
                break;
            case 1066:
                iconSrc = 'assets/sleet.svg'
                break;
            case 1069:
                iconSrc = 'assets/sleet.svg'
                break;
            case 1072:
                iconSrc = 'assets/rain.svg'
                break;
            case 1087:
                iconSrc = 'assets/thunderstorm.svg'
                break;
            case 1114:
                iconSrc = 'assets/snow.svg'
                break;
            case 1117:
                iconSrc = 'assets/snow.svg'
                break;
            case 1135:
                iconSrc = 'assets/smoke.svg'
                break;
            case 1147:
                iconSrc = 'assets/smoke.svg'
                break;
            case 1150:
                iconSrc = 'assets/rain.svg'
                break;
            case 1153:
                iconSrc = 'assets/rain.svg'
                break;
            case 1168:
                iconSrc = 'assets/rain.svg'
                break;
            case 1171:
                iconSrc = 'assets/rain.svg'
                break;
            case 1180:
                iconSrc = 'assets/rain.svg'
                break;
            case 1183:
                iconSrc = 'assets/rain.svg'
                break;
            case 1186:
                iconSrc = 'assets/rain.svg'
                break;
            case 1189:
                iconSrc = 'assets/rain.svg'
                break;
            case 1192:
                iconSrc = 'assets/rain.svg'
                break;
            case 1195:
                iconSrc = 'assets/rain.svg'
                break;
            case 1198:
                iconSrc = 'assets/rain.svg'
                break;
            case 1201:
                iconSrc = 'assets/rain.svg'
                break;
            case 1204:
                iconSrc = 'assets/sleet.svg'
                break;
            case 1207:
                iconSrc = 'assets/sleet.svg'
                break;
            case 1210:
                iconSrc = 'assets/sleet.svg'
                break;
            case 1213:
                iconSrc = 'assets/sleet.svg'
                break;
            case 1216:
                iconSrc = 'assets/sleet.svg'
                break;
            case 1219:
                iconSrc = 'assets/sleet.svg'
                break;
            case 1222:
                iconSrc = 'assets/sleet.svg'
                break;
            case 1225:
                iconSrc = 'assets/sleet.svg'
                break;
            case 1237:
                iconSrc = 'assets/sleet.svg'
                break;
            case 1240:
                iconSrc = 'assets/rain.svg'
                break;
            case 1243:
                iconSrc = 'assets/rain.svg'
                break;
            case 1246:
                iconSrc = 'assets/rain.svg'
                break;
            case 1249:
                iconSrc = 'assets/sleet.svg'
                break;
            case 1252:
                iconSrc = 'assets/sleet.svg'
                break;
            case 1255:
                iconSrc = 'assets/sleet.svg'
                break;
            case 1258:
                iconSrc = 'assets/sleet.svg'
                break;
            case 1261:
                iconSrc = 'assets/sleet.svg'
                break;
            case 1264:
                iconSrc = 'assets/sleet.svg'
                break;
            case 1273:
                iconSrc = 'assets/thunderstorm.svg'
                break;
            case 1276:
                iconSrc = 'assets/thunderstorm.svg'
                break;
            case 1279:
                iconSrc = 'assets/thunderstorm.svg'
                break;
            case 1282:
                iconSrc = 'assets/thunderstorm.svg'
                break;
            default:
                iconSrc = 'assets/clear-day.svg'
            
        }
    }

    return { displayWeatherData }
})();


// <div class="cityInfoContainer">
// <div class="city">Sao Paulo</div>
// <div class="localTime">11:20</div>
// </div>
// <div class="conditionContainer">
// <img class="conditionIcon iconBig" src="assets/clear-day.svg">
// <div class="conditionText">Cloudy</div>
// </div>
// <div class="supportInfoContainer">
// <div class="supportInfoList">
//     <div class="supportInfo">
//         <img src="assets/raindrop.svg" class="iconSmall pptIcon">
//         <text><span class="ppt">5</span> m/s</text>
//     </div>
//     <div class="supportInfo">
//         <img src="assets/clear-day.svg" class="iconSmall uvIcon">
//         <text><span class="uvIndex">6</span></text>
//     </div>
// </div>
// <div class="temperature">28°</div>
// </div>