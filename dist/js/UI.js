class UI {
  static displayStartData() {
    UI.displayMeasure();
    UI.displayProducts();
    UI.displayUnitSelect();
  }

  static displayError(message) {
    const errorElement = document.querySelector(".error");
    errorElement.innerHTML = `
      <p class="error__text">${message}</p>
    `;
    setTimeout(() => (errorElement.innerHTML = ""), 3000);
  }

  static displayMeasure() {
    const measureElement = document.querySelector(".measure");
    measureElement.innerHTML = "";
    Object.entries(WEIGHTS).forEach(item => {
      measureElement.innerHTML += `
        <div class="measure__item">
          <span class="name">${
            item[0]
          }</span> <span class="value">${getFloatNumber(item[1].value)} ${
        item[1].unit
      }</span>
        </div>
      `;
    });
  }

  static displayProducts() {
    const productsElement = document.querySelector(".products");
    productsElement.innerHTML = "";
    Object.entries(PRODUCTS).forEach(item => {
      Object.entries(item[1]).forEach(unit => {
        productsElement.innerHTML += `
          <div class="products__item">
            <span class="name">1 ${unit[0]} ${item[0]}</span> <span class="value">${unit[1]} gram</span>
          </div>
        `;
      });
    });
  }

  static displayUnitSelect() {
    const selectElement = document.querySelector(".unit__select");
    selectElement.innerHTML = "";
    MEASURE.forEach(item => {
      selectElement.innerHTML += `
        <option value="${item}">${item}</option>
      `;
    });
  }

  static getIngredientElement(ingredients, index, basicUnit, portion) {
    const ingredient = { ...ingredients[index] };
    const unitValue = getUnitValue(ingredient.unit);

    if (basicUnit) {
      const { amount, unit } = getValueForBasicUnit(
        ingredient.name,
        ingredient.amount,
        unitValue
      );
      ingredient.amount = amount;
      ingredient.unit = unit;
    }

    ingredient.amount *= portion;

    const element = document.createElement("section");
    element.classList.add("ingredient_item");
    element.addEventListener("click", e =>
      removeIngredientHandler(e, ingredients, index)
    );
    element.innerHTML = `
      <p class="ingredient_item__text">${getFloatNumber(ingredient.amount)} ${
      ingredient.unit
    } ${ingredient.name}</p>
      <button class="ingredient_item__button">
        <i class="far fa-times-circle"></i>
      </button>
    `;

    return element;
  }

  static displayIngredients(ingredients) {
    const basicUnitButton = document.getElementById("basic_unit");
    const ingredientsContent = document.querySelector(".ingredients__content");
    const portionInput = document.getElementById("portion_input");

    ingredientsContent.innerHTML = "";

    const basicUnit =
      basicUnitButton.getAttribute("data-value") === "off" ? false : true;
    const portionValue = prepareNumber(portionInput.value);
    const portion =
      portionValue === "" || !checkNumber(portionValue)
        ? 1
        : parseFloat(portionValue);

    ingredients.forEach((ingredient, index) => {
      ingredientsContent.appendChild(
        UI.getIngredientElement(ingredients, index, basicUnit, portion)
      );
    });
  }
}
