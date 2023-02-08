const city = "Orlando";
const url = `http://api.weatherapi.com/v1/forecast.json?key=a33dec18f1bd45bda0931106230802&q=${city}&days=10`;
        fetch(url).then(response => response.json())
        .then(data => {
            const getCurrentWeather = data.current.temp_f;
            const getCurrentCondition = data.current.condition.text;
           const currentWeather = `Current Weather: ${getCurrentWeather}\u00B0C, Current Condition: ${getCurrentCondition}`;
           document.getElementById("current-weather").innerText = currentWeather;
            
            const daysData = [];
            const forecast = data.forecast.forecastday;
             forecast.forEach(day => {
                 daysData.push({
                     date: day.date,
                     high: day.day.maxtemp_f,
                     low: day.day.mintemp_f,
                     rainy: day.day.daily_chance_of_rain, 
                 });

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

                let testWeather = currentWeather + day1 + day2 + day3 + day4 + day5 + day6 + day7 + day8 + day9 + day10;

                console.log(testWeather);

             });

            //  const day1 = document.getElementById("day1");
            //  const day2 = document.getElementById("day2");
            //  const day3 = document.getElementById("day3");
            //  const day4 = document.getElementById("day4");
            //  const day5 = document.getElementById("day5");
            //  const day6 = document.getElementById("day6");
            //  const day7 = document.getElementById("day7");
            //  const day8 = document.getElementById("day8");
            //  const day9 = document.getElementById("day9");
            //  const day10 = document.getElementById("day10");
             

            
            //  console.log(`10 day weather forecast: ${dayData.date}: Low: ${dayData.mintemp_f}°F, High: ${dayData.maxtemp_f}°F, Chance of Rain: ${dayData.daily_chance_of_rain}`);
            //  console.log(`10 day weather forecast: ${dayData.date}: Low: ${dayData.mintemp_f}°F, High: ${dayData.maxtemp_f}°F, Chance of Rain: ${dayData.daily_chance_of_rain}`);
            //  console.log(`10 day weather forecast: ${dayData.date}: Low: ${dayData.mintemp_f}°F, High: ${dayData.maxtemp_f}°F, Chance of Rain: ${dayData.daily_chance_of_rain}`);
            //  console.log(`10 day weather forecast: ${dayData.date}: Low: ${dayData.mintemp_f}°F, High: ${dayData.maxtemp_f}°F, Chance of Rain: ${dayData.daily_chance_of_rain}`);
            //  console.log(`10 day weather forecast: ${dayData.date}: Low: ${dayData.mintemp_f}°F, High: ${dayData.maxtemp_f}°F, Chance of Rain: ${dayData.daily_chance_of_rain}`);
            //  console.log(`10 day weather forecast: ${dayData.date}: Low: ${dayData.mintemp_f}°F, High: ${dayData.maxtemp_f}°F, Chance of Rain: ${dayData.daily_chance_of_rain}`);
            //  console.log(`10 day weather forecast: ${dayData.date}: Low: ${dayData.mintemp_f}°F, High: ${dayData.maxtemp_f}°F, Chance of Rain: ${dayData.daily_chance_of_rain}`);
            //  console.log(`10 day weather forecast: ${dayData.date}: Low: ${dayData.mintemp_f}°F, High: ${dayData.maxtemp_f}°F, Chance of Rain: ${dayData.daily_chance_of_rain}`);
            //  console.log(`10 day weather forecast: ${dayData.date}: Low: ${dayData.mintemp_f}°F, High: ${dayData.maxtemp_f}°F, Chance of Rain: ${dayData.daily_chance_of_rain}`);
            // }); 
        });