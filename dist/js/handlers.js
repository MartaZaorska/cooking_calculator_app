const temperatureHandler = changeScale => {
  const inputTemperature = document.getElementById("input_temperature");
  const resultElement = document.querySelector("#result_temperature");
  const firstScaleElement = document.querySelector(".first_scale");
  const resultScaleElement = document.querySelector(".result_scale");

  const firstScale = firstScaleElement.getAttribute("data-scale");
  const resultScale = resultScaleElement.getAttribute("data-scale");

  if (changeScale) {
    resultScaleElement.setAttribute("data-scale", firstScale);
    firstScaleElement.setAttribute("data-scale", resultScale);
    resultScaleElement.innerHTML = `&deg; ${firstScale}`;
    firstScaleElement.innerHTML = `&deg; ${resultScale}`;
  }

  if (inputTemperature.value === "") {
    resultElement.innerText = "0";
    return;
  }

  const value = prepareNumber(inputTemperature.value);
  if (checkNumber(value)) {
    const firstNewScale = firstScaleElement.getAttribute("data-scale");
    const temp = parseFloat(value);
    resultElement.innerText =
      firstNewScale === "F"
        ? Math.floor(getCelsius(temp))
        : Math.floor(getFahrenheit(temp));
  }
};
