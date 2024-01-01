const API_KEY= "c1d84e717f908fa2e409924eefe16142";

async function fetchWeatherData(city, units) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
      );
    
      if (!response.ok) {
        throw new Error("İstek başarılı değil");
      }
    
      return response.json();
    } catch (error) {
      console.log(error);
    }
  }
  
  export default fetchWeatherData;