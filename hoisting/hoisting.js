/**
 * This function defines and calls 4 other functions.
 *
 * Some are function delarations, some are function expressions.
 *
 * Due to hoisting, some of these functions don't work as expected.
 *
 * When the greetingGenerator("John Doe"", "JavaScript Store") works, it should return:
 * "Hello John Doe! Welcome to the JavaScript Store!"
 *
 * Without changing any code (only re-ordering the lines), can you fix this
 * file so that it returns the correct string?
 */

function greetingGenerator(customerName, storeName) {
  let greeting = "";

  const customer = (customer) => `${customer}! `;

  const hello = function () {
    return "Hello ";
  };

  greeting += hello();
  greeting += customer(customerName);
  greeting += welcome();
  greeting += store(storeName);

  function store(storeName) {
    return `${storeName}!`;
  }

  function welcome() {
    return "Welcome to the ";
  }

  return greeting;
}

console.log(greetingGenerator("John Doe", "JavaScript Store"));

module.exports = greetingGenerator;
