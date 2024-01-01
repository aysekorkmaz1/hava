import { convertCountryCode, convertTimeStamp } from "./utils.js";

function updateUI(data, selectors) {
  console.log(data, selectors);
  selectors.city.innerHTML = `${data.name},${convertCountryCode(
    data.sys.country
  )}`;
  selectors.datetime.innerHTML = convertTimeStamp(data.dt, data.timezone);
  selectors.weatherForecast.innerHTML = `<p>${data.weather[0].main}</p>`;
  selectors.weatherTemperature.innerHTML = `${data.main.temp.toFixed()}&#176`;
  selectors.weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`;
  selectors.weatherMinMax.innerHTML = `<p>Min:${data.main.temp_min.toFixed()}&#176</p>  <p>Max:${data.main.temp_max.toFixed()}&#176</p>`;
  selectors.weatherRealfeel.innerHTML = `${data.main.feels_like.toFixed()}&#176`;
  selectors.weatherHumidity.innerHTML = `${data.main.humidity}%`;
  selectors.weatherWind.innerHTML = `${data.wind.speed} m/s `;
  selectors.weatherPressure.innerHTML = `${data.main.pressure} hPa`;
}

export { updateUI };