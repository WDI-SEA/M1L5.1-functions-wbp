const carouselProducts = ["t-shirt", "sweater", "polo"];
const gridProducts = ["mug", "small_poster", "medium_poster", "large_poster"];
const sidebarProducts = ["sweatpants", "shorts", "skirt", "baseball_cap"];

const formatProducts = require("./firstClassFunctions");

const solution = [
  ["T-shirt", "Sweater", "Polo"],
  ["Mug", "Small Poster", "Medium Poster", "Large Poster"],
  ["Sweatpants", "Shorts", "Skirt", "Baseball Cap"],
];

test("it should still return the same value after refactoring", () => {
  expect(
    formatProducts(carouselProducts, gridProducts, sidebarProducts)
  ).toEqual(solution);
});
