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
  
  const calculateTotalPrice = (price) => {
    const priceAfterTax = price * (1 + salesTax);
    const priceAfterShipping = priceAfterTax + shippingPrice;
    return priceAfterShipping.toFixed(2);
  }



//In class solution
// const calculateItemPrice = function (itemPrice, salesTax, shippingPrice) {
//   itemPriceAfterTax = itemPrice * (1 + salesTax)
//   itemPriceAfterShipping = itemPriceAfterTax + shippingPrice
//   itemPriceAfterShippingRounded = itemPriceAfterShipping.tooFixed(2)
//   return itemPriceAfterShippingRounded
// }

// function previewFullPrice(salesTax, shippingPrice) {
//   const shirtPrice = 30.99;
//   const sweatshirtPrice = 40.99;
//   const smallPosterPrice = 15.99;
//   const largePosterPrice = 22.99;
//   const mugPrice = 12.99;

  return [
    calculateTotalPrice(shirtPrice, salesTax, shippingPrice),
    calculateTotalPrice(sweatshirtPrice, salesTax, shippingPrice),
    calculateTotalPrice(smallPosterPrice, salesTax, shippingPrice),
    calculateTotalPrice(largePosterPrice, salesTax, shippingPrice),
    calculateTotalPrice(mugPrice, salesTax, shippingPrice),
  ];
}

module.exports = previewFullPrice;
