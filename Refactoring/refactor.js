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
  //Create an object with the items (keys) and their price
  const items = {
    "shirtPrice" : 30.99,
    "sweatshirtPrice" : 40.99,
    "smallPosterPrice" : 15.99,
    "largePosterPrice" : 22.99,
    "mugPrice" : 12.99};

  //Create an array to hold the final calculated prices
  const allPricesAfterShippingRounded =[];

  //For each item/price pair in the items object, calculate the final price then append to final prices array
  for (let item in items){
    let priceAfterTax = items[item] * (1 + salesTax);
    let priceAfterShipping = priceAfterTax + shippingPrice;
    let priceAfterShippingRounded = priceAfterShipping.toFixed(2);
    allPricesAfterShippingRounded.push(priceAfterShippingRounded);
  }

  //Return the final prices array (call the array, not an array of variables)
  return allPricesAfterShippingRounded;
}

module.exports = previewFullPrice;

