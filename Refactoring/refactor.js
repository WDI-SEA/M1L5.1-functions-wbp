/**
 * This function calculates the price of goods after sales tax and shipping
 * for the list of most commonly sold items in our digital storefront.
 *
 * This code currently works (and passes all tests),
 * but it is  hard to read due to repetitive code.
 *
 * Can you refactor it by writing functions that reduce repetition?
 */

// const fruits = ["banana", "mango", "navel orange"]

// fruits.forEach(function(fruit) {
//   console.log(fruit)
// })

function previewFullPrice(salesTax, shippingPrice) {
  const shirtPrice = 30.99;
  const sweatshirtPrice = 40.99;
  const smallPosterPrice = 15.99;
  const largePosterPrice = 22.99;
  const mugPrice = 12.99;

  // here, salesTax and shippingPrice are a "closure" in the scope of the inner funciton
  const calculateItemPrice = function (itemPrice) {
    itemPriceAfterTax = itemPrice * (1 + salesTax)
    itemPriceAfterShipping = itemPriceAfterTax + shippingPrice
    itemPriceAfterShippingRounded = itemPriceAfterShipping.toFixed(2)
    return itemPriceAfterShippingRounded
  }

  return [
    calculateItemPrice(shirtPrice),
    calculateItemPrice(sweatshirtPrice),
    calculateItemPrice(smallPosterPrice),
    calculateItemPrice(largePosterPrice),
    calculateItemPrice(mugPrice),
  ];
}


module.exports = previewFullPrice;
