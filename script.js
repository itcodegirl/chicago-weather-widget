//Function for date display on widget
window.onload = function () {
  // Set today's date
  let dateElem = document.getElementById("date");
  let today = new Date();
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  dateElem.innerHTML = today.toLocaleDateString("en-US", options);
};

//Function to display weatherData
let weatherData = {
  Paris: {
    temperatureF: "69°F",
    temperatureC: "20°C",
    humidity: "80%"
  },
  Tokyo: {
    temperatureF: "59°F",
    temperatureC: "15°C",
    humidity: "50%"
  },
  Lisbon: {
    temperatureF: "83°F",
    temperatureC: "28°C",
    humidity: "20%"
  },
  "San Francisco": {
    temperatureF: "75°F",
    temperatureC: "24°C",
    humidity: "100%"
  },
  Chicago: {
    temperatureF: "74°F",
    temperatureC: "24°C",
    humidity: "77%"
  }
};

// Function to update temperature and unit values
function updateTemperatureValues(cityWeather) {
  document.querySelector(".temp-value:nth-of-type(1)").textContent =
    cityWeather.temperatureF;
  document.querySelector(".temp-value:nth-of-type(2)").textContent =
    cityWeather.temperatureC;
  document.querySelector(".unit:nth-of-type(1)").textContent = "°F";
  document.querySelector(".unit:nth-of-type(2)").textContent = "°C";
}

// Function to update humidity value
function updateHumidityValue(cityWeather) {
  document.querySelector(
    ".additional-info div:nth-of-type(2) span"
  ).textContent = cityWeather.humidity;
}

// Function to display error message
function displayErrorMessage(city) {
  const errorMessage = `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`;
  alert(errorMessage);
}

// Function to display weather or error message
function displayWeather(city) {
  const cityWeather = weatherData[city];
  if (cityWeather) {
    updateTemperatureValues(cityWeather);
    updateHumidityValue(cityWeather);
  } else {
    displayErrorMessage(city);
  }
}

// Function to display weather or error message
//function displayWeather(city) {
//const cityWeather = weatherData[city];
//if (cityWeather) {
// Display weather information
// Updating the temperature values and humidity on the page
//} else {
// Display error message
// Showing an error message if the city is not found
//}
//}

// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  const cityInput = document.getElementById("cityInput");
  const searchButton = document.getElementById("submitButton");

  // Event listener for search button click
  searchButton.addEventListener("click", function () {
    const cityName = cityInput.value;
    displayWeather(cityName);
  });
});
