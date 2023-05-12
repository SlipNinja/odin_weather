import './style.css';
import { getWeather } from './weatherTools';

getWeather().then((weather) => {
    console.log(weather);
});