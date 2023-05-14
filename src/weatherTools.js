
const weatherkey = "2394dd7f30034b2da3a181205230805";

function updateWeather(e) {
    const research = document.getElementById("searchfield").value;
    const weatherresult = getWeather(research);
    weatherresult.then(displayWeather);
}

async function getWeather(cityname) {

    let result = "No result";
    let request = `https://api.weatherapi.com/v1/current.json?key=${weatherkey}&q=${cityname}`;

    result =  await fetch(request, {mode: 'cors'})
    result = result.json();

    return result;
}


function displayWeather(weather) {// country, city, temperature, wind speed, wind direction
    
    if(weather.error){
        console.log(weather.error);
        const errorfield = document.getElementById("errorfield");
        errorfield.hidden = false;
        return;
    } else {
        errorfield.hidden = true;
    }

    const country = weather.location.country;
    const city = weather.location.name;
    const degree = weather.current.temp_c;
    const condition = weather.current.condition.text;
    const windSpeed = weather.current.wind_kph;
    const windDirection = weather.current.wind_dir; // N, E, W, S

    // Fill the display
    const countryfield = document.getElementById("countryfield");
    const cityfield = document.getElementById("cityfield");
    const weatherfield = document.getElementById("weatherfield");
    const tempfield = document.getElementById("tempfield");
    const speedfield = document.getElementById("speedfield");
    const directionfield = document.getElementById("directionfield");

    countryfield.innerHTML = country;
    cityfield.innerHTML = city;
    weatherfield.innerHTML = condition;
    tempfield.innerHTML = degree + '°C';
    speedfield.innerHTML = windSpeed + ' km/h';
    directionfield.innerHTML = windDirection;
}

export { getWeather, displayWeather, updateWeather };