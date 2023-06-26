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
    const prices = [
        { name: "shirt", price: 30.99 },
        { name: "sweatShirt", price: 40.99 },
        { name: "smallPoster", price: 15.99 },
        { name: "largePoster", price: 22.99 },
        { name: "mug", price: 12.99 },
    ];

    function computePrice(o) {
        return (o.price * (1 + salesTax) + shippingPrice).toFixed(2);
    }
    return prices.map(computePrice);
}

module.exports = previewFullPrice;
