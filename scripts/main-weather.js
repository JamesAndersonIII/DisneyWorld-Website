const city = "Orlando";
const url = `http://api.weatherapi.com/v1/forecast.json?key=a33dec18f1bd45bda0931106230802&q=${city}&days=10`;
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const forecast = data.forecast.forecastday;
    const daysData = [];

    forecast.forEach((day) => {
      daysData.push({
        date: day.date,
        high: day.day.maxtemp_f,
        low: day.day.mintemp_f,
        rainy: day.day.daily_chance_of_rain,
      });
      console.log(daysData[1]);

      const day1 = `Today: Low: ${daysData[0].low}°F, High: ${daysData[0].high}°F, Chance of Rain: ${daysData[0].rainy}%`;
      const day2 = ` ${daysData[1].date}: Low: ${daysData[1].low}°F, High: ${daysData[1].high}°F, Chance of Rain: ${daysData[1].rainy}%`;
      const day3 = ` ${daysData[2].date}: Low: ${daysData[2].low}°F, High: ${daysData[2].high}°F, Chance of Rain: ${daysData[2].rainy}%`;
      const day4 = ` ${daysData[3].date}: Low: ${daysData[3].low}°F, High: ${daysData[3].high}°F, Chance of Rain: ${daysData[3].rainy}%`;
      const day5 = ` ${daysData[4].date}: Low: ${daysData[4].low}°F, High: ${daysData[4].high}°F, Chance of Rain: ${daysData[4].rainy}%`;
      const day6 = ` ${daysData[5].date}: Low: ${daysData[5].low}°F, High: ${daysData[5].high}°F, Chance of Rain: ${daysData[5].rainy}%`;
      const day7 = ` ${daysData[6].date}: Low: ${daysData[6].low}°F, High: ${daysData[6].high}°F, Chance of Rain: ${daysData[6].rainy}%`;
      const day8 = ` ${daysData[7].date}: Low: ${daysData[7].low}°F, High: ${daysData[7].high}°F, Chance of Rain: ${daysData[7].rainy}%`;
      const day9 = ` ${daysData[8].date}: Low: ${daysData[8].low}°F, High: ${daysData[8].high}°F, Chance of Rain: ${daysData[8].rainy}%`;
      const day10 = ` ${daysData[9].date}: Low: ${daysData[9].low}°F, High: ${daysData[9].high}°F, Chance of Rain: ${daysData[9].rainy}%`;

      const dayOne = document.getElementById("day1");
      const dayTwo = document.getElementById("day2");
      const dayThree = document.getElementById("day3");
      const dayFour = document.getElementById("day4");
      const dayFive = document.getElementById("day5");
      const daySix = document.getElementById("day6");
      const daySeven = document.getElementById("day7");
      const dayEight = document.getElementById("day8");
      const dayNine = document.getElementById("day9");
      const dayTen = document.getElementById("day10");

      dayOne.innerHTML = day1;
      dayTwo.innerText = day2;
      dayThree.innerText = day3;
      dayFour.innerText = day4;
      dayFive.innerText = day5;
      daySix.innerText = day6;
      daySeven.innerText = day7;
      dayEight.innerText = day8;
      dayNine.innerText = day9;
      dayTen.innerText = day10;
    });
  });
