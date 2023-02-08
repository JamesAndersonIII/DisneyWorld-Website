const city = "Orlando";
const url = `http://api.weatherapi.com/v1/forecast.json?key=a33dec18f1bd45bda0931106230802&q=${city}&days=10`;
        fetch(url).then(response => response.json())
        .then(data => {
            const getCurrentWeather = data.current.temp_f;
            const getCurrentCondition = data.current.condition.text;
           const currentWeather = `Current Weather: ${getCurrentWeather}\u00B0C, Current Condition: ${getCurrentCondition}`
            document.getElementById("current-weather").innerText = currentWeather;

           const daysData = [];
           const forecast = data.forecast.forecastday;
            // forecast.forEach(day => {
                daysData.push({
                    date: forecast.date,
                    high: forecast.day.maxtemp_f + "\u00B0" + "F",
                    low: forecast.day.mintemp_f + "\u00B0" + "F",
                    rainy: forecast.day.daily_chance_of_rain + "%", 
                });
                console.log(daysData); // how to get this to only print once vs say array 10 times?
            // });

            // daysData.forEach(day => {
                
                // const dayElement = document.createElement("article");
                // dayElement.innerText = `${day.date}: Low: ${day.mintemp_f}°F, High: ${day.maxtemp_f}°F, Chance of Rain: ${day.daily_chance_of_rain}`;
            // });
        });

          
             
             

        //      console.log( ${daysData.date}: Low: ${daysData.mintemp_f}°F, High: ${daysData.maxtemp_f}°F, Chance of Rain: ${daysData.daily_chance_of_rain}`);
        //      console.log(`10 day weather forecast: ${dayData.date}: Low: ${dayData.mintemp_f}°F, High: ${dayData.maxtemp_f}°F, Chance of Rain: ${dayData.daily_chance_of_rain}`);
        //      console.log(`10 day weather forecast: ${dayData.date}: Low: ${dayData.mintemp_f}°F, High: ${dayData.maxtemp_f}°F, Chance of Rain: ${dayData.daily_chance_of_rain}`);
        //      console.log(`10 day weather forecast: ${dayData.date}: Low: ${dayData.mintemp_f}°F, High: ${dayData.maxtemp_f}°F, Chance of Rain: ${dayData.daily_chance_of_rain}`);
        //      console.log(`10 day weather forecast: ${dayData.date}: Low: ${dayData.mintemp_f}°F, High: ${dayData.maxtemp_f}°F, Chance of Rain: ${dayData.daily_chance_of_rain}`);
        //      console.log(`10 day weather forecast: ${dayData.date}: Low: ${dayData.mintemp_f}°F, High: ${dayData.maxtemp_f}°F, Chance of Rain: ${dayData.daily_chance_of_rain}`);
        //      console.log(`10 day weather forecast: ${dayData.date}: Low: ${dayData.mintemp_f}°F, High: ${dayData.maxtemp_f}°F, Chance of Rain: ${dayData.daily_chance_of_rain}`);
        //      console.log(`10 day weather forecast: ${dayData.date}: Low: ${dayData.mintemp_f}°F, High: ${dayData.maxtemp_f}°F, Chance of Rain: ${dayData.daily_chance_of_rain}`);
        //      console.log(`10 day weather forecast: ${dayData.date}: Low: ${dayData.mintemp_f}°F, High: ${dayData.maxtemp_f}°F, Chance of Rain: ${dayData.daily_chance_of_rain}`);
        //      console.log(`10 day weather forecast: ${dayData.date}: Low: ${dayData.mintemp_f}°F, High: ${dayData.maxtemp_f}°F, Chance of Rain: ${dayData.daily_chance_of_rain}`);
        //     }); 
        // })