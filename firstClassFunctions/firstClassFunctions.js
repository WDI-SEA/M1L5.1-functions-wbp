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

// ORIGINALLY PROVIDED CODE FROM GENERAL ASSEMBLY

// function formatProducts(carousel, grid, sidebar) {
//   const carouselProductsReformatted = carouselProducts.map((product) => {
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

//   const gridProductsReformatted = gridProducts.map((product) => {
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

// console.log(formatProducts(carouselProducts, gridProducts, sidebarProducts));

// module.exports = formatProducts;




// Leah's solution that reduced to 16 lines of code by only writing the "formatProductName" function once, then calling it for each section name via .map().

function formatProductName(product) {
  let spacedProduct = product.replace("_", " ");
  let productWords = spacedProduct.split(" ");
  let capitalizedProductWords = productWords.map(
    (word) => word.charAt(0).toUpperCase() + word.substring(1)
  );
  let capitalizedProduct = capitalizedProductWords.join(" ");
  return capitalizedProduct;
}
function formatProducts(carousel, grid, sidebar) {
  const carouselProductsReformatted = carousel.map(formatProductName);
  const gridProductsReformatted = grid.map(formatProductName);
  const sidebarProductsReformatted = sidebar.map(formatProductName);
  return [carouselProductsReformatted, gridProductsReformatted, sidebarProductsReformatted];
}
module.exports = formatProducts;




//With Wes in the morning

// function formatProducts(carousel, grid, sidebar) {

//   function reformatProduct(product) {
//       let spacedProduct = product.replace("_", " ");
//       productWords = spacedProduct.split(" ");
//       capitalizedProductWords = productWords.map(
//         (word) => word.charAt(0).toUpperCase() + word.substring(1)
//       );
//       capitalizedProduct = capitalizedProductWords.join(" ");
//       return capitalizedProduct;
//   }

// const carouselProductsReformatted = carouselProducts.map(reformatProduct);
// const gridProductsReformatted = gridProducts.map(reformatProduct);
// const sidebarProductsReformatted = sidebarProducts.map(reformatProduct);

// return [
//   carouselProductsReformatted,
//   gridProductsReformatted,
//   sidebarProductsReformatted,
//   ];
// }