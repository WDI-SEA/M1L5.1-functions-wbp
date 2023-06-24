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

  // Prices refactored into object
  const prices = {
    shirtPrice: 30.99,
    sweatshirtPrice: 40.99,
    smallPosterPrice: 15.99,
    largePosterPrice: 22.99,
    mugPrice: 12.99
  }

  const pricesAfterShippingRounded = [];

  // iterate over prices and add them to pricesAfterShippingArray
  for (let key in prices) {
    if (prices.hasOwnProperty(key)) {
      let priceAfterTax = prices[key] * (1 + salesTax);
      let priceAfterShipping = priceAfterTax + shippingPrice;
      let priceAfterShippingRounded = priceAfterShipping.toFixed(2);
      pricesAfterShippingRounded.push(priceAfterShippingRounded);
    }
  }

  return pricesAfterShippingRounded;

}

module.exports = previewFullPrice;
