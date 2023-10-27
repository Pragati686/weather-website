function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = '7817f535178677cb747fdfc24db9f5e7'; // Replace with your actual API key (e.g., OpenWeatherMap API)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const location = data.name;
            const temperature = (data.main.temp - 273.15).toFixed(2) + "°C";
            const description = data.weather[0].description;

            document.getElementById("location").textContent = `Location: ${location}`;
            document.getElementById("temperature").textContent = `Temperature: ${temperature}`;
            document.getElementById("description").textContent = `Description: ${description}`;
            document.getElementById("weather-info").style.display = "block";
        })
        .catch(error => {
            alert("City not found. Please try again.");
        });
}
