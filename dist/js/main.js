document.addEventListener("DOMContentLoaded", () => {
  //DOM Elements
  const temperatureInput = document.querySelector("#input_temperature");
  const temperatureChangeButton = document.querySelector(".temperature_button");
  const addIngredientForm = document.querySelector(".add_ingredient__form");
  const portionInput = document.getElementById("portion_input");
  const basicUnitButton = document.getElementById("basic_unit");

  const ingredients = Store.getData() || [];

  const init = async () => {
    await UI.displayStartData();
    await UI.displayIngredients(ingredients);
  };

  //Event Listener
  temperatureInput.addEventListener("input", () => temperatureHandler(false));
  temperatureChangeButton.addEventListener("click", () =>
    temperatureHandler(true)
  );

  init();
});
