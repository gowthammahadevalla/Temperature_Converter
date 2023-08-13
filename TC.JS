document.addEventListener("DOMContentLoaded", function() {
    const convertBtn = document.getElementById("convertBtn");
    const celsiusInput = document.getElementById("celsius");
    const resultDisplay = document.getElementById("result");

    convertBtn.addEventListener("click", function() {
        const celsius = parseFloat(celsiusInput.value);

        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            resultDisplay.textContent = `${celsius.toFixed(2)}°C is ${fahrenheit.toFixed(2)}°F`;
        } else {
            resultDisplay.textContent = "Please enter a valid temperature in Celsius.";
        }
    });
});
