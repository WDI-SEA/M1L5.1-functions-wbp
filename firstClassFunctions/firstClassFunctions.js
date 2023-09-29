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

function formatProducts() {
   allProducts = [carouselProducts, gridProducts, sidebarProducts]
  const allProductsReformatted = []
  allProducts.forEach(productSet => {
    const newProductSet = []
    productSet.forEach(product => {
      // replace underscores with spaces
      let spacedProduct = product.replace("_", " ")
      //capitalize each word
      productWords = spacedProduct.split(" ")
      capitalizedProductWords = productWords.map(
        (word) => word.charAt(0).toUpperCase() + word.substring(1)
      )
      capitalizedProduct = capitalizedProductWords.join(" ")
      newProductSet.push(capitalizedProduct)
    })
    allProductsReformatted.push(newProductSet)
  })
  return allProductsReformatted
}

module.exports = formatProducts;
