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

// //create an object for all 3 consts?

const combinedProductObject = {
  carouselProducts: ["t-shirt", "sweater", "polo"],
  gridProducts: ["mug", "small_poster", "medium_poster", "large_poster"],
  sidebarProducts: ["sweatpants", "shorts", "skirt", "baseball_cap"],
};

// // use a ternaery to see if any item in the array has underscore, and if it does replace it with spces
function formatProducts() {
  return Object.values(combinedProductObject).map((object) => {
    return object.map((obj) => {
      let spacedProduct = obj.replace("_", " ");
      let productWords = spacedProduct.split(" ");
      let capitalizedProductWords = productWords.map(
        (word) => word.charAt(0).toUpperCase() + word.substring(1)
      );
      return capitalizedProductWords.join(" ");
    });
  });
}

//function to swap out each array

// //properly space and capitalize each word
// function formatProducts(carousel, grid, sidebar) {
//   const carouselProductsReformatted = carouselProducts.map((product) => {
//     // replace underscores with spaces
//     let spacedProduct = product.replace("_", " ");

//     //capitalize each wordfun]
//     productWords = spacedProduct.split(" ");
//     capitalizedProductWords = productWords.map(
//       (word) => word.charAt(0).toUpperCase() + word.substring(1)
//     );
//     capitalizedProduct = capitalizedProductWords.join(" ");
//     return capitalizedProduct;
//   });
// }
// const gridProductsReformatted = gridProducts.map((product) => {
//   // replace underscores with spaces
//   let spacedProduct = product.replace("_", " ");

//     //capitalize each word
//     productWords = spacedProduct.split(" ");
//     capitalizedProductWords = productWords.map(
//       (word) => word.charAt(0).toUpperCase() + word.substring(1)
//     );
//     capitalizedProduct = capitalizedProductWords.join(" ");
//     return capitalizedProduct;
//   });

//   const sidebarProductsReformatted = sidebarProducts.map((product) => {
//     // replace underscores with spaces
//     let spacedProduct = product.replace("_", " ");

//     //capitalize each word
//     productWords = spacedProduct.split(" ");
//     capitalizedProductWords = productWords.map(
//       (word) => word.charAt(0).toUpperCase() + word.substring(1)
//     );
//     capitalizedProduct = capitalizedProductWords.join(" ");
//     return capitalizedProduct;
//   });

//   return [
//     carouselProductsReformatted,
//     gridProductsReformatted,
//     sidebarProductsReformatted,
//   ];
// }

module.exports = formatProducts;
