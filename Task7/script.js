const apiKey = '95d37ebe40be4508390fbb2092ee9351'; // Replace with your real API key
const loadingEl = document.getElementById('loading');

function showLoading(show) {
  loadingEl.style.display = show ? 'block' : 'none';
}

function getWeather() {
  const city = document.getElementById('city-input').value.trim();
  if (!city) return alert('Please enter a city');

  showLoading(true);
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => {
      if (!res.ok) throw new Error('City not found');
      return res.json();
    })
    .then(data => {
      displayCurrentWeather(data);
      getForecast(city);
    })
    .catch(err => {
      alert(err.message);
      console.error(err);
    })
    .finally(() => showLoading(false));
}

function displayCurrentWeather(data) {
  const weatherEl = document.getElementById('weather');
  weatherEl.innerHTML = `
    <div class="card">
      <h2>${data.name}</h2>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
      <p>${data.weather[0].description}</p>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Humidity: ${data.main.humidity}%</p>
    </div>
  `;
}

function getForecast(city) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      const forecastEl = document.getElementById('forecast');
      forecastEl.innerHTML = '<h3>3-Day Forecast</h3>';
      let filtered = data.list.filter((_, i) => i % 8 === 0).slice(0, 3);

      filtered.forEach(day => {
        forecastEl.innerHTML += `
          <div class="card">
            <p>${new Date(day.dt_txt).toDateString()}</p>
            <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" />
            <p>${day.weather[0].description}</p>
            <p>Temp: ${day.main.temp}°C</p>
          </div>
        `;
      });
    });
}

// Bonus: Auto-fetch weather by user's location
navigator.geolocation?.getCurrentPosition(pos => {
  const { latitude, longitude } = pos.coords;
  showLoading(true);
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      displayCurrentWeather(data);
      getForecast(data.name);
    })
    .catch(err => console.error('Geolocation error:', err))
    .finally(() => showLoading(false));
});
