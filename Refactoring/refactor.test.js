const previewFullPrice = require("./refactor");

test("it still calculates the prices correctly after refactoring", () => {
  expect(previewFullPrice(0.08, 4.0)).toEqual([
    "37.47",
    "48.27",
    "21.27",
    "28.83",
    "18.03",
  ]);
});