const prepareNumber = value => value.replace(",", ".");

const getCelsius = fahrenheit => (5 / 9) * (fahrenheit - 32);

const getFahrenheit = celsius => (9 / 5) * celsius + 32;

const checkNumber = value => {
  return /^\d*\.?\d*$/.test(value);
};
