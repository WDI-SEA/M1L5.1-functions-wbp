//put the prices into an Object so i can later put them into an array so i can call the map function
const prices = {
  shirtPrice: 30.99,
  sweatshirtPrice: 40.99,
  smallPosterPrice: 15.99,
  largePosterPrice: 22.99,
  mugPrice: 12.99,
};

//create a function to do the math equation
function previewFullPrice(salesTax, shippingPrice) {
  //without declaring a variable, run the object into an array and map over it with the math equation.
  return Object.values(prices).map((itemPrice) =>
    (itemPrice * (1 + salesTax) + shippingPrice).toFixed(2)
  );
  //return the price and add toFixed, after this line my roundedPrices array is now all the updated prices
}

//return the main variable out of the function

//run the function over each value (for each?)
/**
 //return the values





 
 * This function calculates the price of goods after sales tax and shipping
 * for the list of most commonly sold items in our digital storefront.
 *
 * This code currently works (and passes all tests),
 * but it is  hard to read due to repetitive code.
 *
 * Can you refactor it by writing functions that reduce repetition?
 */

// function previewFullPrice(salesTax, shippingPrice) {
//   const shirtPrice = 30.99;
//   const sweatshirtPrice = 40.99;
//   const smallPosterPrice = 15.99;
//   const largePosterPrice = 22.99;
//   const mugPrice = 12.99;

// shirtPriceAfterTax = shirtPrice * (1 + salesTax);
// shirtPriceAfterShipping = shirtPriceAfterTax + shippingPrice;
// shirtPriceAfterShippingRounded = shirtPriceAfterShipping.toFixed(2);

//   sweatshirtPriceAfterTax = sweatshirtPrice * (1 + salesTax);
//   sweatshirtPriceAfterShipping = sweatshirtPriceAfterTax + shippingPrice;
//   sweatshirtPriceAfterShippingRounded = sweatshirtPriceAfterShipping.toFixed(2);

//   smallPosterPriceAfterTax = smallPosterPrice * (1 + salesTax);
//   smallPosterPriceAfterShipping = smallPosterPriceAfterTax + shippingPrice;
//   smallPosterPriceAfterShippingRounded =
//     smallPosterPriceAfterShipping.toFixed(2);

//   largePosterPriceAfterTax = largePosterPrice * (1 + salesTax);
//   largePosterPriceAfterShipping = largePosterPriceAfterTax + shippingPrice;
//   largePosterPriceAfterShippingRounded =
//     largePosterPriceAfterShipping.toFixed(2);

//   mugPriceAfterTax = mugPrice * (1 + salesTax);
//   mugPriceAfterShipping = mugPriceAfterTax + shippingPrice;
//   mugPriceAfterShippingRounded = mugPriceAfterShipping.toFixed(2);

//   return [
//     shirtPriceAfterShippingRounded,
//     sweatshirtPriceAfterShippingRounded,
//     smallPosterPriceAfterShippingRounded,
//     largePosterPriceAfterShippingRounded,
//     mugPriceAfterShippingRounded,
//   ];
// }

module.exports = previewFullPrice;
