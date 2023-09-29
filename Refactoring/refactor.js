/**
 * This function calculates the price of goods after sales tax and shipping
 * for the list of most commonly sold items in our digital storefront.
 *
 * This code currently works (and passes all tests),
 * but it is  hard to read due to repetitive code.
 *
 * Can you refactor it by writing functions that reduce repetition?
 */

// ORIGINALLY PROVIDED CODE FROM GENERAL ASSEMBLY 

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

// module.exports = previewFullPrice;




// Leah's solution below that reduces the original 33 lines of code down to only 10 lines using a forEach loop!

function previewFullPrice(salesTax, shippingPrice) {
  const itemPrice = [30.99, 40.99, 15.99, 22.99, 12.99]
  itemPrice.forEach ((item, idx) => {
    let itemPriceAfterTax = item * (1 + salesTax);
    let itemPriceAfterShipping = itemPriceAfterTax + shippingPrice;
    itemPrice[idx] = itemPriceAfterShipping.toFixed(2);
  })
  return itemPrice;
} 
module.exports = previewFullPrice; 




// With Weston in the morning

// function calculatePriceAfterShippingRounded(itemPrice, salesTax, shippingPrice) {
//   itemPriceAfterTax = itemPrice * (1 + salesTax);
//   itemPriceAfterShipping = itemPriceAfterTax + shippingPrice;
//   return itemPriceAfterShipping.toFixed(2);
// }

// function previewFullPrice(salesTax, shippingPrice) {
//   const shirtPrice = 30.99;
//   const sweatshirtPrice = 40.99;
//   const smallPosterPrice = 15.99;
//   const largePosterPrice = 22.99;
//   const mugPrice = 12.99;

// return [
//   calculatePriceAfterShippingRounded(shirtPrice, salesTax, shippingPrice),
//   calculatePriceAfterShippingRounded(sweatshirtPrice, salesTax, shippingPrice),
//   calculatePriceAfterShippingRounded(smallPosterPrice, salesTax, shippingPrice),
//   calculatePriceAfterShippingRounded(largePosterPrice, salesTax, shippingPrice),
//   calculatePriceAfterShippingRounded(mugPrice, salesTax, shippingPrice),
// ];

// }

// Wes's code here: https://github.com/weston-bailey/M1L5.1-functions-wbp