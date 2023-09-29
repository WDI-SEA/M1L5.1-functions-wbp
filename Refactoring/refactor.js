/*
 * This function calculates the price of goods after sales tax and shipping
 * for the list of most commonly sold items in our digital storefront.
 *
 * This code currently works (and passes all tests),
 * but it is  hard to read due to repetitive code.
 *
 * Can you refactor it by writing functions that reduce repetition?
 * 
 * npx jest ./Refactoring/refactor.test.js
 *
 * */

function calculatePriceAfterShippingRounded(itemPrice, salesTax, shippingPrice) {
  itemPriceAfterTx = itemPrice * (1 + salesTax);
  itemPriceAfterShipping = itemPriceAfterTx + shippingPrice;
  return itemPriceAfterShipping.toFixed(2);
}

function previewFullPrice(salesTax, shippingPrice) {
  const shirtPrice = 30.99;
  const sweatshirtPrice = 40.99;
  const smallPosterPrice = 15.99;
  const largePosterPrice = 22.99;
  const mugPrice = 12.99;

  return [
    calculatePriceAfterShippingRounded(shirtPrice , salesTax, shippingPrice),
    calculatePriceAfterShippingRounded(sweatshirtPrice , salesTax, shippingPrice),
    calculatePriceAfterShippingRounded(smallPosterPrice , salesTax, shippingPrice),
    calculatePriceAfterShippingRounded(largePosterPrice , salesTax, shippingPrice),
    calculatePriceAfterShippingRounded(mugPrice , salesTax, shippingPrice),
  ]

}

module.exports = previewFullPrice;
