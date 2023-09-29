/**
 * This function calculates the price of goods after sales tax and shipping
 * for the list of most commonly sold items in our digital storefront.
 *
 * This code currently works (and passes all tests),
 * but it is  hard to read due to repetitive code.
 *
 * Can you refactor it by writing functions that reduce repetition?
 */

function previewFullPrice(salesTax, shippingPrice) {
  // Creating item repository object
  const prices = {
    shirtPrice: 30.99,
    sweatshirtPrice: 40.99,
    smallPosterPrice: 15.99,
    largePosterPrice:  22.99,
    mugPrice: 12.99,
  }

  // Creating total price item array
  const totals = [];

  // Finding total prices and adding to totals array
  for (const [key, value] of Object.entries(prices)) {
    priceAfterTax = value * (1 + salesTax);
    priceAfterShipping = priceAfterTax + shippingPrice;
    priceAfterShippingRounded = priceAfterShipping.toFixed(2);
    totals.push(priceAfterShippingRounded);
  }
  return totals;
}
  

// function calculatePriceAfterShippingRounded(itemPrice, salestax, shippingPrice) {
//   itemPriceAfterTax = itemPrice * (1 + salesTax)
//   itemPriceAfterShipping = itemPriceAfterTax + shippingPrice;
//   return itemPriceAfterShipping.toFixed(2);
// }

// function previewFullPrice(salesTax, shippingPrice) {
//   const shirtPrice = 30.99;
//   const sweatshirtPrice = 40.99;
//   const smallPosterPrice = 15.99;
//   const largePosterPrice = 22.99;
//   const mugPrice = 12.99; 
  
//   return [
//     calculatePriceAfterShippingRounded(shirtPrice, salesTax, shippingPrice),
//     calculatePriceAfterShippingRounded(sweatshirtPrice, salesTax, shippingPrice),
//     calculatePriceAfterShippingRounded(smallPosterPrice, salesTax, shippingPrice),
//     calculatePriceAfterShippingRounded(largePosterPrice, salesTax, shippingPrice),
//     calculatePriceAfterShippingRounded(mugPrice, salesTax, shippingPrice),
//   ];
// }

  // const shirtPrice = 30.99;
  // const sweatshirtPrice = 40.99;
  // const smallPosterPrice = 15.99;
  // const largePosterPrice = 22.99;
  // const mugPrice = 12.99; 

//   shirtPriceAfterTax = shirtPrice * (1 + salesTax);
//   shirtPriceAfterShipping = shirtPriceAfterTax + shippingPrice;
//   shirtPriceAfterShippingRounded = shirtPriceAfterShipping.toFixed(2);
  

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
