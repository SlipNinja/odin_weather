import './style.css';
import { displayWeather, getWeather } from './weatherTools';
import { buildPage } from './pageBuilder';

buildPage();

const tmpCity = "paris";

getWeather(tmpCity).then((weather) => {
    console.log(weather);
    displayWeather(weather);
});