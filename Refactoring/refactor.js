/**
 * This function calculates the price of goods after sales tax and shipping
 * for the list of most commonly sold items in our digital storefront.
 *
 * This code currently works (and passes all tests),
 * but it is  hard to read due to repetitive code.
 *
 * Can you refactor it by writing functions that reduce repetition?
 */

////////////////////////////////////////////////

const merchPriceArray = [
  {name: 'shirt', price: 30.99},
  {name: 'sweatshirt', price: 40.99},
  {name: 'smallPoster', price: 15.99},
  {name: 'largePoster', price: 22.99},
  {name: 'mug', price: 12.99},
  ];
// Initialize an empty array where we will store the final prices.
let finalPrices = [];

function previewFullPrice(salesTax, shippingPrice) {
// Loop over each product in the productPrices array
  merchPriceArray.forEach(merchObject => {
// For each object in the array, calculate the price after tax and shipping.
    priceAfterTax = merchObject.price * (1 + salesTax);
    priceAfterShipping = priceAfterTax + shippingPrice;
// Get the price after shipping rounded.
    priceAfterShippingRounded = priceAfterShipping.toFixed(2);
// Push the value of ^ to your finalPrices array.    
    finalPrices.push(priceAfterShippingRounded);
  });
// Finally, return the finalPrices array.
  return finalPrices;
};

module.exports = previewFullPrice

//////////////////////////////////////////
// const priceAfterTax = (itemPrice) =>
// function previewFullPrice(salesTax, shippingPrice) {
//   const shirtPrice = 30.99;
//   const sweatshirtPrice = 40.99;
//   const smallPosterPrice = 15.99;
//   const largePosterPrice = 22.99;
//   const mugPrice = 12.99;

//   shirtPriceAfterTax = shirtPrice * (1 + salesTax);
//   shirtPriceAfterShipping = shirtPriceAfterTax + shippingPrice;
//   shirtPriceAfterShippingRounded = shirtPriceAfterShipping.toFixed(2);

//   sweatshirtPriceAfterTax = sweatshirtPrice * (1 + salesTax);
//   sweatshirtPriceAfterShipping = sweatshirtPriceAfterTax + shippingPrice;
//   sweatshirtPriceAfterShippingRounded = sweatshirtPriceAfterShipping.toFixed(2);

//   smallPosterPriceAfterTax = smallPosterPrice * (1 + salesTax);
//   smallPosterPriceAfterShipping = smallPosterPriceAfterTax + shippingPrice;
//   smallPosterPriceAfterShippingRounded = smallPosterPriceAfterShipping.toFixed(2);

//   largePosterPriceAfterTax = largePosterPrice * (1 + salesTax);
//   largePosterPriceAfterShipping = largePosterPriceAfterTax + shippingPrice;
//   largePosterPriceAfterShippingRounded = largePosterPriceAfterShipping.toFixed(2);

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

// module.exports = previewFullPrice;
