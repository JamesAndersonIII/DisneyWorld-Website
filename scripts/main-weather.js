const city = "Orlando";
const url = `http://api.weatherapi.com/v1/forecast.json?key=a33dec18f1bd45bda0931106230802&q=${city}&days=10`;
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const forecast = data.forecast.forecastday;
    const daysData = [];

    forecast.forEach((day) => {
      daysData.push({
        pic: day.day.condition.icon,
        date: day.date,
        high: day.day.maxtemp_f,
        low: day.day.mintemp_f,
        rainy: day.day.daily_chance_of_rain,
      });
    });
    // console.log(daysData);

    const day1 = `Today: 
    Low: ${daysData[0].low}°F 
    High: ${daysData[0].high}°F 
    Chance of Rain: ${daysData[0].rainy}%`;

    const day2 = ` ${daysData[1].date}: 
    Low: ${daysData[1].low}°F
    High: ${daysData[1].high}°F
    Chance of Rain: ${daysData[1].rainy}%`;

    const day3 = ` ${daysData[2].date}: 
    Low: ${daysData[2].low}°F
    High: ${daysData[2].high}°F
    Chance of Rain: ${daysData[2].rainy}%`;

    const day4 = ` ${daysData[3].date}: 
    Low: ${daysData[3].low}°F
    High: ${daysData[3].high}°F
    Chance of Rain: ${daysData[3].rainy}%`;

    const day5 = ` ${daysData[4].date}: 
    Low: ${daysData[4].low}°F
    High: ${daysData[4].high}°F
    Chance of Rain: ${daysData[4].rainy}%`;

    const day6 = ` ${daysData[5].date}: 
    Low: ${daysData[5].low}°F
    High: ${daysData[5].high}°F
    Chance of Rain: ${daysData[5].rainy}%`;

    const day7 = ` ${daysData[6].date}: 
    Low: ${daysData[6].low}°F
    High: ${daysData[6].high}°F
    Chance of Rain: ${daysData[6].rainy}%`;

    const day8 = ` ${daysData[7].date}: 
    Low: ${daysData[7].low}°F
    High: ${daysData[7].high}°F
    Chance of Rain: ${daysData[7].rainy}%`;

    const day9 = ` ${daysData[8].date}: 
    Low: ${daysData[8].low}°F
    High: ${daysData[8].high}°F
    Chance of Rain: ${daysData[8].rainy}%`;

    const day10 = ` ${daysData[9].date}: 
   Low: ${daysData[9].low}°
    High: ${daysData[9].high}°F
   Chance of Rain: ${daysData[9].rainy}%`;

    const dayOne = document.getElementById("day1");
    dayOne.innerText = day1;

    const dayTwo = document.getElementById("day2");
    dayTwo.innerText = day2;

    const dayThree = document.getElementById("day3");
    dayThree.innerText = day3;

    const dayFour = document.getElementById("day4");
    dayFour.innerText = day4;

    const dayFive = document.getElementById("day5");
    dayFive.innerText = day5;

    const daySix = document.getElementById("day6");
    daySix.innerText = day6;

    const daySeven = document.getElementById("day7");
    daySeven.innerText = day7;

    const dayEight = document.getElementById("day8");
    dayEight.innerText = day8;

    const dayNine = document.getElementById("day9");
    dayNine.innerText = day9;

    const dayTen = document.getElementById("day10");
    dayTen.innerText = day10;

    const dayOnePic = document.getElementById("dayOnePic");
    dayOnePic.setAttribute("src", daysData[0].pic);

    const dayTwoPic = document.getElementById("dayTwoPic");
    dayTwoPic.setAttribute("src", daysData[1].pic);

    const dayThreePic = document.getElementById("dayThreePic");
    dayThreePic.setAttribute("src", daysData[2].pic);

    const dayFourPic = document.getElementById("dayFourPic");
    dayFourPic.setAttribute("src", daysData[3].pic);

    const dayFivePic = document.getElementById("dayFivePic");
    dayFivePic.setAttribute("src", daysData[4].pic);

    const daySixPic = document.getElementById("daySixPic");
    daySixPic.setAttribute("src", daysData[5].pic);

    const daySevenPic = document.getElementById("daySevenPic");
    daySevenPic.setAttribute("src", daysData[6].pic);

    const dayEightPic = document.getElementById("dayEightPic");
    dayEightPic.setAttribute("src", daysData[7].pic);

    const dayNinePic = document.getElementById("dayNinePic");
    dayNinePic.setAttribute("src", daysData[8].pic);

    const dayTenPic = document.getElementById("dayTenPic");
    dayTenPic.setAttribute("src", daysData[9].pic);
  });
