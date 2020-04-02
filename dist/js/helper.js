const prepareNumber = value => value.replace(",", ".");

const getCelsius = fahrenheit => (5 / 9) * (fahrenheit - 32);

const getFahrenheit = celsius => (9 / 5) * celsius + 32;

const checkNumber = value => {
  return /^\d*\.?\d*$/.test(value);
};

const getValueForBasicUnit = (name, amount, unit) => {
  const result = { amount, unit };
  if (unit !== "cup" && WEIGHTS[unit]) {
    result.amount = amount * WEIGHTS[unit].value;
    result.unit = WEIGHTS[unit].unit;
  } else if (PRODUCTS[name] && PRODUCTS[name][unit]) {
    result.amount = amount * PRODUCTS[name][unit];
    result.unit = "gram";
  }
  return result;
};

const getUnitValue = unit => {
  const index = unit.indexOf("/");
  return index < 0 ? unit : unit.slice(0, index);
};

const getFloatNumber = number => {
  const value = number.toFixed(3);
  return value.endsWith("000")
    ? value.slice(0, -4)
    : value.endsWith("00")
    ? value.slice(0, -2)
    : value.endsWith("0")
    ? value.slice(0, -1)
    : value;
};
