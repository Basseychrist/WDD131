// Function to calculate wind chill
function computeWindChill(temperature, velocity) {
  return (
      13.12 + 
      0.6215 * temperature - 
      11.37 * Math.pow(velocity, 0.16) + 
      0.3965 * temperature * Math.pow(velocity, 0.16)
  ).toFixed(2);
}

// Select HTML elements
const windChillElement = document.querySelector('#windChillValue');
const temperatureElement = document.querySelector('#temperatureValue');
const velocityElement = document.querySelector('#velocityValue');

// Define the temperature and wind speed
const currentTemperature = 10;
const currentVelocity = 10;

// Set the values in the HTML
temperatureElement.textContent = currentTemperature + "°C";
velocityElement.textContent = currentVelocity + " km/h";

// Calculate and display wind chill if conditions are met
if (currentTemperature <= 10 && currentVelocity > 4.8) {
  const windChill = computeWindChill(currentTemperature, currentVelocity);
  windChillElement.textContent = windChill;
} else {
  windChillElement.textContent = "N/A";
}
