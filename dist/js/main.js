document.addEventListener("DOMContentLoaded", () => {
  //DOM Elements
  const temperatureInput = document.querySelector("#input_temperature");
  const temperatureChangeButton = document.querySelector(
    ".temperature__button"
  );
  const addIngredientForm = document.querySelector(".add_ingredient__form");
  const portionInput = document.getElementById("portion_input");
  const basicUnitButton = document.getElementById("basic_unit");
  const clearIngredientsButton = document.getElementById("clear_ingredients");

  const init = async () => {
    const ingredients = Store.getData() || [];
    await UI.displayStartData();
    await UI.displayIngredients(ingredients);
  };

  //Event Listener
  temperatureInput.addEventListener("input", () => temperatureHandler(false));
  temperatureChangeButton.addEventListener("click", () =>
    temperatureHandler(true)
  );
  basicUnitButton.addEventListener("click", changeUnitHandler);
  portionInput.addEventListener("input", portionHandler);
  addIngredientForm.addEventListener("submit", addIngredientHandler);
  clearIngredientsButton.addEventListener("click", clearIngredientsHandler);

  init();
});
