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

  const object = { 
    shirtPrice: 30.99, 
    sweatshirtPrice: 40.99, 
    smallPosterPrice: 15.99,
    largePosterPrice: 22.99,
    mugPrice: 12.99
  };

  for (const item in object) {
    itemPriceAfterTax = item * (1 + salesTax);
    itemPriceAfterShipping = itemPriceAfterTax + shippingPrice;
    itemPriceAfterShippingRounded = itemPriceAfterShipping.toFixed(2);


  return [
    itemPriceAfterShippingRounded,
  ];
}
}

module.exports = previewFullPrice;


// find the behavior that is being repeated for each product, and extract it into a function.
// Then, call that function once for each product and return the result.

