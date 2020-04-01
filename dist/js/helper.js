const prepareNumber = value => value.replace(",", ".");

const getCelsius = fahrenheit => (5 / 9) * (fahrenheit - 32);

const getFahrenheit = celsius => (9 / 5) * celsius + 32;

const checkNumber = value => {
  return /^\d*\.?\d*$/.test(value);
};

const getValueForBasicUnit = (amount, unit) => {
  return unit === "cup" || !WEIGHTS[unit]
    ? { amount, unit }
    : { amount: amount * WEIGHTS[unit].value, unit: WEIGHTS[unit].unit };
};

const getUnitValue = unit => {
  const index = unit.indexOf("/");
  return index < 0 ? unit : unit.slice(0, index);
};
