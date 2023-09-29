/**
 * This function calculates the price of goods after sales tax and shipping
 * for the list of most commonly sold items in our digital storefront.
 *
 * This code currently works (and passes all tests),
 * but it is  hard to read due to repetitive code.
 *
 * Can you refactor it by writing functions that reduce repetition?
 */

const inventory = {
  shirt: 30.99,
  sweatshirt: 40.99,
  smallPoster: 15.99,
  largePoster: 22.99,
  mug: 12.99,
}

function previewFullPrice(salesTax, shippingPrice) {
  const output = []
  for (let item in inventory) {
    console.log(inventory[item])
    const postTax = inventory[item] * (1 + salesTax)
    const postShipping = postTax + shippingPrice
    output.push(postShipping.toFixed(2))
  }
  return output
}

module.exports = previewFullPrice;
