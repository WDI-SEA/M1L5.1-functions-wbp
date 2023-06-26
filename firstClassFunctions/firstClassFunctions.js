const carouselProducts = ["t-shirt", "sweater", "polo"];
const gridProducts = ["mug", "small_poster", "medium_poster", "large_poster"];
const sidebarProducts = ["sweatpants", "shorts", "skirt", "baseball_cap"];

/**
 * On our digital storefront, we advertise products in three different places:
 * the carousel, the main display grid, and the sidebar.
 *
 * In each of these places, we want to format the names of our products the same way
 *
 * To reformat the names, we use map() to apply a callback function to each
 * element of the array, and return a new array with all the modified elements
 *
 * We use the same callback function on each of the three product displays,
 * but using an anonymous function is causing the code to be very repetetive.
 *
 * Can you refactor this code to be less repetitive?
 */
// This wont work for arbitrarily nesting as it would blow the stack
// recursively applies function to elements inside nested arrays
function walk(arrs, fn) {
    for (let i = 0; i < arrs.length; i++) {
        if (typeof arrs[i] === "object") arrs[i] = walk(arrs[i], fn);
        else arrs[i] = fn(arrs[i]);
    }
    return arrs;
}

function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.substring(1);
}
function formatProduct(product) {
    return product.split("_").map(capitalize).join(" ");
}
function formatProducts(carousel, grid, sidebar) {
    return walk([carousel, grid, sidebar], formatProduct);
}

console.log(formatProducts(carouselProducts, gridProducts, sidebarProducts));

module.exports = formatProducts;
