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

const changeUnitHandler = e => {
  const ingredients = Store.getData();
  const basicUnitButton = document.getElementById("basic_unit");
  basicUnitButton.classList.toggle("ingredients__button_unit--active");
  const basicUnit = basicUnitButton.getAttribute("data-value");
  const newBasicUnit = basicUnit === "off" ? "on" : "off";
  basicUnitButton.setAttribute("data-value", newBasicUnit);
  UI.displayIngredients(ingredients);
};

const portionHandler = e => {
  const ingredients = Store.getData();
  if (ingredients.length === 0) return;
  const portion = prepareNumber(e.target.value);
  if (checkNumber(portion) || portion === "") {
    UI.displayIngredients(ingredients);
  } else {
    window.alert("Wprowadź prawidłową liczbę w polu porcja");
  }
};

const addIngredientHandler = e => {
  e.preventDefault();
  const ingredients = Store.getData();
  const { name, unit, amount } = e.target.elements;
  if (name.value === "" || unit.value === "" || amount.value === "") {
    window.alert("Wszystkie pola formularza muszą zostać wypełnione");
    return;
  }

  const amountValue = prepareNumber(amount.value);
  if (!checkNumber(amountValue)) {
    window.alert("Wprowadź poprawną ilość składnika");
    return;
  }

  const newIngredient = {
    name: name.value,
    amount: parseFloat(amountValue),
    unit: unit.value
  };

  ingredients.push(newIngredient);
  UI.displayIngredients(ingredients);
  e.target.reset();
  Store.setData(ingredients);
};

const removeIngredientHandler = (e, ingredients, index) => {
  if (!e.target.classList.contains("ingredient_item__button")) {
    return;
  }

  ingredients.splice(index, 1);
  Store.setData(ingredients);
  UI.displayIngredients(ingredients);
};

const clearIngredientsHandler = () => {
  Store.clearData();
  UI.displayIngredients([]);
};
