const city = "Orlando";
const url = `https://api.weatherapi.com/v1/forecast.json?key=a33dec18f1bd45bda0931106230802&q=${city}`;
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const getCurrentWeather = data.current.temp_f;
    const getCurrentCondition = data.current.condition.text;
    const currentWeather = `Current Weather in Orlando: ${getCurrentWeather}\u00B0F, Current Condition: ${getCurrentCondition}`;
    document.getElementById("current-weather").innerText = currentWeather;
  });
