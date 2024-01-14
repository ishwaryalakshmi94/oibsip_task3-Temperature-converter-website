function convertTemperature() {
    const inputTemperature = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    let convertedTemperature;

    if (isNaN(inputTemperature)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    if (unit === 'celsius') {
        convertedTemperature = (parseFloat(inputTemperature) * 9/5) + 32;
        document.getElementById('result').textContent = `${convertedTemperature.toFixed(2)} °F`;
    } else if (unit === 'fahrenheit') {
        convertedTemperature = (parseFloat(inputTemperature) - 32) * 5/9;
        document.getElementById('result').textContent = `${convertedTemperature.toFixed(2)} °C`;
    } else if (unit === 'kelvin') {
        convertedTemperature = parseFloat(inputTemperature) + 273.15;
        document.getElementById('result').textContent = `${convertedTemperature.toFixed(2)} K`;
    }
}
