const city = "Orlando";
const url = `http://api.weatherapi.com/v1/forecast.json?key=a33dec18f1bd45bda0931106230802&q=${city}&days=10`;
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const getCurrentWeather = data.current.temp_f;
    const getCurrentCondition = data.current.condition.text;
    const currentWeather = `Current Weather in Orlando: ${getCurrentWeather}\u00B0C, Current Condition: ${getCurrentCondition}`;
    document.getElementById("current-weather").innerText = currentWeather;
  });
