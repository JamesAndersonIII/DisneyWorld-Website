// const city = "Orlando";

// fetch data from weather api for orlando
const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=Orlando,FL&key=302cbae28fbb4c4b944ddce306523afc`;
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const forecast = data.data;
    const daysData = [];

    forecast.forEach((day) => {
      const iconCode = day.weather.icon;
      const iconURL = iconMap[iconCode];

      daysData.push({
        pic: iconURL,
        date: day.datetime,
        high: ((day.max_temp * 9/5) + 32).toFixed(1),
        low: ((day.min_temp * 9/5) +32).toFixed(1),
        rainy: day.precip.toFixed(1),
      });
    });
    
    // get the temps/ chance of rain
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


  // add temps/chance of rain to the cards
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

    // get icon photos and add to card
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

  // map with urls for each icon code on weather api site
  const iconMap = {
    // day time icons
    "t01d" : "https://www.weatherbit.io/static/img/icons/t01d.png",  
    "t02d" : "https://www.weatherbit.io/static/img/icons/t02d.png",  
    "t03d" : "https://www.weatherbit.io/static/img/icons/t03d.png", 
    "t04d" : "https://www.weatherbit.io/static/img/icons/t04d.png",  
    "t05d" : "https://www.weatherbit.io/static/img/icons/t05d.png",  
    "d01d" : "https://www.weatherbit.io/static/img/icons/d01d.png", 
    "d02d" : "https://www.weatherbit.io/static/img/icons/d02d.png", 
    "d03d" : "https://www.weatherbit.io/static/img/icons/d03d.png",   
    "r01d" : "https://www.weatherbit.io/static/img/icons/r01d.png",
    "r02d" : "https://www.weatherbit.io/static/img/icons/r02d.png",
    "r03d" : "https://www.weatherbit.io/static/img/icons/r03d.png", 
    "f01d" : "https://www.weatherbit.io/static/img/icons/f01d.png",  
    "r04d" : "https://www.weatherbit.io/static/img/icons/r04d.png",  
    "r05d" : "https://www.weatherbit.io/static/img/icons/r05d.png",
    "r06d" : "https://www.weatherbit.io/static/img/icons/r06d.png", 
    "s01d" : "https://www.weatherbit.io/static/img/icons/s01d.png", 
    "s02d" : "https://www.weatherbit.io/static/img/icons/s02d.png", 
    "s03d" : "https://www.weatherbit.io/static/img/icons/s03d.png",  
    "s04d" : "https://www.weatherbit.io/static/img/icons/s04d.png",
    "s05d" : "https://www.weatherbit.io/static/img/icons/s05d.png",
    "s06d" : "https://www.weatherbit.io/static/img/icons/s06d.png", 
    "a01d" : "https://www.weatherbit.io/static/img/icons/a01d.png", 
    "a02d" : "https://www.weatherbit.io/static/img/icons/a02d.png",
    "a03d" :"https://www.weatherbit.io/static/img/icons/a03d.png",
    "a04d" : "https://www.weatherbit.io/static/img/icons/a04d.png",
    "a05d" : "https://www.weatherbit.io/static/img/icons/a05d.png",  
    "a06d" : "https://www.weatherbit.io/static/img/icons/a06d.png",
    "c01d" : "https://www.weatherbit.io/static/img/icons/c01d.png",  
    "c02d" : "https://www.weatherbit.io/static/img/icons/c02d.png", 
    "c03d" : "https://www.weatherbit.io/static/img/icons/c03d.png",  
    "c04d" : "https://www.weatherbit.io/static/img/icons/c04d.png",
    "u00d" : "https://www.weatherbit.io/static/img/icons/u00d.png",
// night time icons
    "t01n" : "https://www.weatherbit.io/static/img/icons/t01n.png",  
    "t02n" : "https://www.weatherbit.io/static/img/icons/t02n.png",  
    "t03n" : "https://www.weatherbit.io/static/img/icons/t03n.png", 
    "t04n" : "https://www.weatherbit.io/static/img/icons/t04n.png",  
    "t05n" : "https://www.weatherbit.io/static/img/icons/t05n.png",  
    "d01n" : "https://www.weatherbit.io/static/img/icons/d01n.png", 
    "d02n" : "https://www.weatherbit.io/static/img/icons/d02n.png", 
    "d03n" : "https://www.weatherbit.io/static/img/icons/d03n.png",   
    "r01n" : "https://www.weatherbit.io/static/img/icons/r01n.png",
    "r02n" : "https://www.weatherbit.io/static/img/icons/r02n.png",
    "r03n" : "https://www.weatherbit.io/static/img/icons/r03n.png", 
    "f01n" : "https://www.weatherbit.io/static/img/icons/f01n.png",  
    "r04n" : "https://www.weatherbit.io/static/img/icons/r04n.png",  
    "r05n" : "https://www.weatherbit.io/static/img/icons/r05n.png",
    "r06n" : "https://www.weatherbit.io/static/img/icons/r06n.png", 
    "s01n" : "https://www.weatherbit.io/static/img/icons/s01n.png", 
    "s02n" : "https://www.weatherbit.io/static/img/icons/s02n.png", 
    "s03n" : "https://www.weatherbit.io/static/img/icons/s03n.png",  
    "s04n" : "https://www.weatherbit.io/static/img/icons/s04n.png",
    "s05n" : "https://www.weatherbit.io/static/img/icons/s05n.png",
    "s06n" : "https://www.weatherbit.io/static/img/icons/s06n.png", 
    "a01n" : "https://www.weatherbit.io/static/img/icons/a01n.png", 
    "a02n" : "https://www.weatherbit.io/static/img/icons/a02n.png",
    "a03n" : "https://www.weatherbit.io/static/img/icons/a03n.png",
    "a04n" : "https://www.weatherbit.io/static/img/icons/a04n.png",
    "a05n" : "https://www.weatherbit.io/static/img/icons/a05n.png",  
    "a06n" : "https://www.weatherbit.io/static/img/icons/a06n.png",
    "c01n" : "https://www.weatherbit.io/static/img/icons/c01n.png",  
    "c02n" : "https://www.weatherbit.io/static/img/icons/c02n.png", 
    "c03n" : "https://www.weatherbit.io/static/img/icons/c03n.png",  
    "c04n" : "https://www.weatherbit.io/static/img/icons/c04n.png",
    "u00n" : "https://www.weatherbit.io/static/img/icons/u00n.png"
  }
