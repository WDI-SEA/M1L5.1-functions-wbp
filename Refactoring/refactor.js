/**
 * This function calculates the price of goods after sales tax and shipping
 * for the list of most commonly sold items in our digital storefront.
 *
 * This code currently works (and passes all tests),
 * but it is  hard to read due to repetitive code.
 *
 * Can you refactor it by writing functions that reduce repetition?
 */

// need functions to do math
//calculate price after tax pass 2 var
//calculate price after shiping with new afterTax price
//round the price of after shiping to .00

function priceAfter(item, tax, shipping){
  let total = ((item*(1+tax))+shipping).toFixed(2);
  return total;
}

//console.log(priceAfter(30.99,0.08, 4.0));

function previewFullPrice(salesTax, shippingPrice) {
  const shirtPrice = 30.99;
  const sweatshirtPrice = 40.99;
  const smallPosterPrice = 15.99;
  const largePosterPrice = 22.99;
  const mugPrice = 12.99;

  shirtPriceAfterShippingRounded = priceAfter(shirtPrice,salesTax,shippingPrice);

  sweatshirtPriceAfterShippingRounded = priceAfter(sweatshirtPrice,salesTax,shippingPrice);

  smallPosterPriceAfterShippingRounded = priceAfter(smallPosterPrice,salesTax,shippingPrice);

  largePosterPriceAfterShippingRounded = priceAfter(largePosterPrice,salesTax,shippingPrice);

  mugPriceAfterShippingRounded = priceAfter(mugPrice,salesTax,shippingPrice);

  return [
    shirtPriceAfterShippingRounded,
    sweatshirtPriceAfterShippingRounded,
    smallPosterPriceAfterShippingRounded,
    largePosterPriceAfterShippingRounded,
    mugPriceAfterShippingRounded,
  ];
}

module.exports = previewFullPrice;
