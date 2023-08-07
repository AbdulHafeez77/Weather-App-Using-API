// // a20a5dd0fb09837454e4240e74e9bbd0
let container = document.getElementById("container");
let city = document.getElementById("city");
let country = document.getElementById("country");
let temperature = document.getElementById("temperature");
let weatherType = document.getElementById("weather-type");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("wind-speed");
let clouds = document.getElementById("clouds");
let feelsLike = document.getElementById("feels-like");
let weatherImgTemperature = document.getElementById("weather-img-temperature");


navigator.geolocation.getCurrentPosition((location) => {
    let latitude = location.coords.latitude;
    let longitude = location.coords.longitude;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=50bf2c0c611fd572a45bb2a668f207f7&units=metric`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            city.innerHTML = res.name;
            country.innerHTML = res.sys.country;
            temperature.innerHTML = Math.round(res.main.temp) + "°";
            weatherType.innerHTML = res.weather[0].main;
            humidity.innerHTML = res.main.humidity + "%";
            feelsLike.innerHTML = res.main.feels_like + "%";
            clouds.innerHTML = res.clouds.all + "%";
            windSpeed.innerHTML = res.wind.speed + "km/h";
            function myFunction(x) {
                if (res.weather[0].main == "Haze") {
                    if (x.matches) { 
                        container.style.backgroundImage = "url('images/haze.jpg')"; 
                    } else {
                        container.style.backgroundImage = "url('images/haze phone.jpg')";
                    }
                } else if (res.weather[0].main == "Rain") {
                    if (x.matches) { 
                        container.style.backgroundImage = "url('images/rain.jpg')"; 
                    } else {
                        container.style.backgroundImage = "url('images/rain phone.jpg')";
                    }
                } else if (res.weather[0].main == "Smoke") {
                    if (x.matches) { 
                        container.style.backgroundImage = "url('images/smoke.jpg')"; 
                    } else {
                        container.style.backgroundImage = "url('images/smoke phone.jpg')";
                    }
                } else if (res.weather[0].main == "Clear") {
                    if (x.matches) { 
                        container.style.backgroundImage = "url('images/clear.jpg')"; 
                    } else {
                        container.style.backgroundImage = "url('images/clear phone.jpg')";
                    }
                }  else if (res.weather[0].main == "Thunderstorm") {
                    if (x.matches) { 
                        container.style.backgroundImage = "url('images/storm.jpg')"; 
                    } else {
                        container.style.backgroundImage = "url('images/storm phone.jpg')";
                    }
                } else if (res.weather[0].main == "Clouds") {
                    if (x.matches) { 
                        container.style.backgroundImage = "url('images/clouds.jpg')"; 
                    } else {
                        container.style.backgroundImage = "url('images/clouds phone.jpg')";
                    }
                } else if (res.weather[0].main == "Mist") {
                    if (x.matches) { 
                        container.style.backgroundImage = "url('images/mist.jpg')"; 
                    } else {
                        container.style.backgroundImage = "url('images/mist phone.jpg')";
                    }
                }
            }
            var x = window.matchMedia("(min-width: 415px)");
            myFunction(x);
            
            x.addListener(function(x) {
                myFunction(x);
            });
        })
        .catch((rej) => {
            console.log(rej)
    })
})


let weatherLocation = document.getElementById("weather-location");

let getWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherLocation.value}&appid=50bf2c0c611fd572a45bb2a668f207f7&units=metric`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            city.innerHTML = res.name;
            country.innerHTML = res.sys.country;
            temperature.innerHTML = Math.round(res.main.temp) + "°";
            weatherType.innerHTML = res.weather[0].main;
            humidity.innerHTML = res.main.humidity + "%";
            feelsLike.innerHTML = res.main.feels_like + "%";
            clouds.innerHTML = res.clouds.all + "%";
            windSpeed.innerHTML = res.wind.speed + "km/h";

            function myFunction(x) {
                if (res.weather[0].main == "Haze") {
                    if (x.matches) { 
                        container.style.backgroundImage = "url('images/haze.jpg')"; 
                    } else {
                        container.style.backgroundImage = "url('images/haze phone.jpg')";
                    }
                } else if (res.weather[0].main == "Rain") {
                    if (x.matches) { 
                        container.style.backgroundImage = "url('images/rain.jpg')"; 
                    } else {
                        container.style.backgroundImage = "url('images/rain phone.jpg')";
                    }
                } else if (res.weather[0].main == "Smoke") {
                    if (x.matches) { 
                        container.style.backgroundImage = "url('images/smoke.jpg')"; 
                    } else {
                        container.style.backgroundImage = "url('images/smoke phone.jpg')";
                    }
                } else if (res.weather[0].main == "Clear") {
                    if (x.matches) { 
                        container.style.backgroundImage = "url('images/clear.jpg')"; 
                    } else {
                        container.style.backgroundImage = "url('images/clear phone.jpg')";
                    }
                }  else if (res.weather[0].main == "Thunderstorm") {
                    if (x.matches) { 
                        container.style.backgroundImage = "url('images/storm.jpg')"; 
                    } else {
                        container.style.backgroundImage = "url('images/storm phone.jpg')";
                    }
                } else if (res.weather[0].main == "Clouds") {
                    if (x.matches) { 
                        container.style.backgroundImage = "url('images/clouds.jpg')"; 
                    } else {
                        container.style.backgroundImage = "url('images/clouds phone.jpg')";
                    }
                } else if (res.weather[0].main == "Mist") {
                    if (x.matches) { 
                        container.style.backgroundImage = "url('images/mist.jpg')"; 
                    } else {
                        container.style.backgroundImage = "url('images/mist phone.jpg')";
                    }
                }
            }
            var x = window.matchMedia("(min-width: 415px)");
            myFunction(x);
            
            x.addListener(function(x) {
                myFunction(x);
            });
        })
        .catch((rej) => {
            console.log(rej)
        })
}











