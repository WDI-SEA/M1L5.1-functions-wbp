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
  const shirtPrice = 30.99;
  const sweatshirtPrice = 40.99;
  const smallPosterPrice = 15.99;
  const largePosterPrice = 22.99;
  const mugPrice = 12.99;

  function priceAfterTax(price) {
    return price * (1 + salesTax);
  }
  
  function priceAfterShipping(price) {
    return priceAfterTax(price) + shippingPrice;
  }
  
  function priceAfterShippingRounded(price) {
    return priceAfterShipping(price).toFixed(2);
  }

  // Single line function for everything
  // function priceAfterShippingRounded(price) {
  //   return (price * (1 + salesTax) + shippingPrice).toFixed(2);
  // }

  return [
    shirtPriceAfterShippingRounded = priceAfterShippingRounded(shirtPrice),
    sweatshirtPriceAfterShippingRounded = priceAfterShippingRounded(sweatshirtPrice),
    smallPosterPriceAfterShippingRounded = priceAfterShippingRounded(smallPosterPrice),
    largePosterPriceAfterShippingRounded = priceAfterShippingRounded(largePosterPrice),
    mugPriceAfterShippingRounded = priceAfterShippingRounded(mugPrice),
  ];
}

module.exports = previewFullPrice;