class UI {
  static displayStartData() {
    UI.displayMeasure();
    UI.displayProducts();
    UI.displayUnitSelect();
  }

  static displayMeasure() {
    const measureElement = document.querySelector(".measure");
    measureElement.innerHTML = "";
    Object.entries(WEIGHTS).forEach(item => {
      measureElement.innerHTML += `
        <div class="measure__item">
          <span class="name">${item[0]}</span> <span class="value">${item[1].value} ${item[1].unit}</span>
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

  static displayIngredients(ingredients) {}
}
