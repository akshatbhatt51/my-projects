const apiKey = "f2510282379b463c7e2de8c343d24814";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const searchbox = document.querySelector(".searchbox input");
const searchBtn = document.querySelector(".searchbox button");
const weathericon = document.querySelector(".weathericon");

async function checkWeather(city) {
    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        console.log(data);

        // Update DOM with weather data
        document.querySelector(".city").textContent = data.name;
        document.querySelector(".temp").textContent = `${data.main.temp}°C`;
        document.querySelector(".wind").textContent = `${data.wind.speed} kmph`;
        document.querySelector(".humidity").textContent = `${data.main.humidity}%`;
        document.querySelector(".feels_like").textContent = "feels like "+`${data.main.feels_like}°C`;

        // Update weather icon based on weather condition
        switch (data.weather[0].main) {
            case "Clouds":
                weathericon.src = "clouds.png";
                break;
            case "Mist":
                weathericon.src = "mist.png";
                break;
            case "Clear":
                weathericon.src = "clear.png";
                break;
            case "Rain":
                weathericon.src = "rain.png";
                break;
            case "Drizzle":
                weathericon.src = "drizzle.png";
                break;
            default:
                weathericon.src = "clear.png"; // Default icon if weather condition is unknown
                break;
        }

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Event listener for search button click
searchBtn.addEventListener("click", () => {
    const city = searchbox.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        console.error('Please enter a city name.');
    }
});

// Optionally, trigger the weather fetch on pressing Enter key in the input field
searchbox.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchBtn.click();
    }
});
