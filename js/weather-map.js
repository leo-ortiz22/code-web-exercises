// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: OPEN_WEATHER_APPID,
//     q:     "San Antonio, US"
// }).done(function(data) {
//     console.log(data);
// });
// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: OPEN_WEATHER_APPID,
//     q:     "San Antonio, US"
// }).done(function(data) {
//     console.log(data);
// });

$.get("https://api.openweathermap.org/data/2.5/onecall", {
    APPID: OPEN_WEATHER_APPID,
    lat: 29.423017,
    lon: -98.48527,
    units: "imperial"
}).done(function (data) {
    console.log('The entire response:', data);
    console.log('Diving in - here is current information: ', data.current);
    console.log(data.current.temp);
    console.log(data.current.weather[0].description);
    console.log(data.daily);

    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    $("#current").append('<p>' + data.current.temp + "°F" + '</p>')
    data.daily.forEach(function (dailyForecast, index) {
        if (index < 5) {
            let datetime = new Date(dailyForecast.dt * 1000)
            // let humidity = "Humidity: "
            // let date1 = months[datetime.getMonth()] + " " + datetime.getDate()
            $('#forecast').append('<h4>' + datetime + '</h4>' + '<p>'+ "Max: " + dailyForecast.temp.max + "°F" + '</p>' + '<p>' + "Low: " + dailyForecast.temp.min + "°F" + '</p>' + '<p>' + "Humidity: " + dailyForecast.humidity + "%" + '</p>')
            console.log(dailyForecast);

        }

    });

    // console.log('A step further - information for tomorrow: ', data.daily[1]);
});

