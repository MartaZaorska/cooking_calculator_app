document.addEventListener("DOMContentLoaded", () => {
  //serviceWorker
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("./serviceWorker.js")
        .then(reg => console.log("Service Worker: Registered"))
        .catch(err => console.log("Service Worker: Error"));
    });
  }

  //DOM Elements
  const temperatureInput = document.querySelector("#input_temperature");
  const temperatureChangeButton = document.querySelector(
    ".temperature__button"
  );
  const addIngredientForm = document.querySelector(".add_ingredient__form");
  const portionInput = document.getElementById("portion_input");
  const basicUnitButton = document.getElementById("basic_unit");
  const clearIngredientsButton = document.getElementById("clear_ingredients");

  const init = () => {
    const ingredients = Store.getData() || [];
    UI.displayStartData();
    UI.displayIngredients(ingredients);
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
