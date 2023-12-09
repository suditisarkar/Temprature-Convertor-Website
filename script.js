function convertTemperature() {
    var inputTemperature = document.getElementById("temperature").value;
    var selectedUnit = document.getElementById("unit").value;
    var resultElement = document.getElementById("result");
  
    // Validate input as a number
    if (isNaN(inputTemperature)) {
      alert("Please enter a valid number for temperature.");
      return;
    }
  
    // Convert temperature based on the selected unit
    var convertedTemperature;
    if (selectedUnit === "celsius") {
      convertedTemperature = (parseFloat(inputTemperature) - 32) * 5/9;
    } else if (selectedUnit === "fahrenheit") {
      convertedTemperature = (parseFloat(inputTemperature) * 9/5) + 32;
    } else if (selectedUnit === "kelvin") {
      convertedTemperature = parseFloat(inputTemperature) + 273.15;
    }
  
    // Display the result
    resultElement.innerHTML = convertedTemperature.toFixed(2) + " " + selectedUnit.toUpperCase();
  }
  