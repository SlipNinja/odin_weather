import { updateWeather } from "./weatherTools";

function buildPage() {
    const mainElement = document.createElement("div");
    mainElement.id = "mainelement";

    const searchBar = document.createElement("div");
    searchBar.id = "searchbar";
    addSearchElement(searchBar);

    const display = document.createElement("div");
    display.id = "display";
    addDisplayLines(display);


    mainElement.appendChild(searchBar);
    mainElement.appendChild(display);

    document.body.appendChild(mainElement);
}

function addSearchElement(searchBar) {
    const searchfield = document.createElement("input");
    searchfield.id = "searchfield";
    searchfield.type = "text";
    searchfield.placeholder = "Enter your city's name...";

    const searchbtn = document.createElement("button");
    searchbtn.id = "searchbtn";
    searchbtn.innerHTML = "Search";
    searchbtn.onclick = updateWeather;

    const errorfield = document.createElement("div");
    errorfield.id = "errorfield";
    errorfield.innerHTML = "No matching city found !";

    searchBar.appendChild(searchfield);
    searchBar.appendChild(searchbtn);
    searchBar.appendChild(errorfield);
}

function addDisplayLines(display) {

    // COUNTRY
    const countrytitle = document.createElement("div");
    countrytitle.innerHTML = "Country";
    countrytitle.classList.add("title");
    display.appendChild(countrytitle);

    const country = document.createElement("div");
    country.classList.add("field");
    country.id = "countryfield";
    display.appendChild(country);

    // CITY
    const citytitle = document.createElement("div");
    citytitle.innerHTML = "City";
    citytitle.classList.add("title");
    display.appendChild(citytitle);

    const city = document.createElement("div");
    city.classList.add("field");
    city.id = "cityfield";
    display.appendChild(city);

    // WEATHER
    const weathertitle = document.createElement("div");
    weathertitle.innerHTML = "Weather";
    weathertitle.classList.add("title");
    display.appendChild(weathertitle);

    const weather = document.createElement("div");
    weather.classList.add("field");
    weather.id = "weatherfield";
    display.appendChild(weather);

    // TEMPERATURE
    const temptitle = document.createElement("div");
    temptitle.innerHTML = "Temperature";
    temptitle.classList.add("title");
    display.appendChild(temptitle);

    const temp = document.createElement("div");
    temp.classList.add("field");
    temp.id = "tempfield";
    display.appendChild(temp);

    // WIND SPEED
    const speedtitle = document.createElement("div");
    speedtitle.innerHTML = "Wind speed";
    speedtitle.classList.add("title");
    display.appendChild(speedtitle);

    const speed = document.createElement("div");
    speed.classList.add("field");
    speed.id = "speedfield";
    display.appendChild(speed);

    // WIND DIRECTION
    const dirtitle = document.createElement("div");
    dirtitle.innerHTML = "Wind direction";
    dirtitle.classList.add("title");
    display.appendChild(dirtitle);

    const direction = document.createElement("div");
    direction.classList.add("field");
    direction.id = "directionfield";
    display.appendChild(direction);
}

export { buildPage };