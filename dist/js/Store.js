class Store {
  static getData() {
    const localData = localStorage.getItem("cooking_calculator_app");
    return localData === null ? [] : JSON.parse(localData);
  }

  static setData(data) {
    localStorage.setItem("cooking_calculator_app", JSON.stringify(data));
  }

  static clearData() {
    localStorage.clear();
  }
}
