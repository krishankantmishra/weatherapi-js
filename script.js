const inputLocation = document.getElementById('location-input');
const searchBar = document.getElementById('search-btn'); 
const cityName = document.getElementById('show-location');
const temperature = document.getElementById('show-tempreture');
const weather = document.getElementById('show-weather');
const humidity = document.getElementById('show-humidity');
const airquality = document.getElementById('show-airquality');

// ✅ function to get input city name
const takeCityName = () => {
  let cityLocation = inputLocation.value.trim();
  if (cityLocation === "") return;
  inputLocation.value = "";
  return cityLocation;
};

// ✅ weather description mapping
const weatherForCasting = (word) => {
  const weatherCodes = {
    0: "Clear sky ☀️",
    1: "Mainly clear 🌤️",
    2: "Partly cloudy ⛅",
    3: "Overcast ☁️",
    45: "Fog 🌫️",
    48: "Depositing rime fog 🌫️",
    51: "Light drizzle 🌦️",
    53: "Moderate drizzle 🌧️",
    55: "Dense drizzle 🌧️",
    61: "Slight rain 🌧️",
    63: "Moderate rain 🌧️",
    65: "Heavy rain 🌧️",
    71: "Slight snow 🌨️",
    73: "Moderate snow 🌨️",
    75: "Heavy snow ❄️",
    80: "Rain showers 🌧️",
    81: "Heavy rain showers ⛈️",
    95: "Thunderstorm ⛈️"
  };
  return weatherCodes[word] || "Unknown weather 🌈";
};

// ✅ on click event
searchBar.addEventListener('click', () => {
  const city = takeCityName();
  if (!city) return;

  // Step 1: Get latitude and longitude from city name
  fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
    .then(response => response.json())
    .then(data => {
      if (data.results && data.results.length > 0) {
        const lat = data.results[0].latitude;
        const lon = data.results[0].longitude;
        cityName.textContent = data.results[0].name;
        console.log(`Latitude: ${lat}, Longitude: ${lon}`);

        // Step 2: Get weather details
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=relativehumidity_2m`)
          .then(response => response.json())
          .then(weatherData => {
            temperature.textContent = `${weatherData.current_weather.temperature}°C`;
            weather.textContent = weatherForCasting(weatherData.current_weather.weathercode);
            humidity.textContent = `${weatherData.hourly.relativehumidity_2m[0]}%`;
          })
          .catch(error => console.error('Error fetching weather data:', error));

        // Step 3: Get Air Quality Index (AQI)
        fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=european_aqi`)
          .then(response => response.json())
          .then(aqiData => {
            const aqi = aqiData.current.european_aqi;
            airquality.textContent = `AQI: ${aqi}`;
            if (aqi <= 20) {
              airquality.style.color = "green";
              airquality.textContent += " (Good)";
            } else if (aqi <= 40) {
              airquality.style.color = "teal";
              airquality.textContent += " (Fair)";
            } else if (aqi <= 60) {
              airquality.style.color = "orange";
              airquality.textContent += " (Moderate)";
            } else if (aqi <= 80) {
              airquality.style.color = "purple";
              airquality.textContent += " (Poor)";
            } else {
              airquality.style.color = "red";
              airquality.textContent += " (Very Poor)";
            }
          })
          .catch(error => console.error('Error fetching AQI:', error));

      } else {
        cityName.textContent = "City not found!";
      }
    })
    .catch(err => console.error("Error fetching location:", err));
});
