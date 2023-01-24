const areAllIdsUnique = require("./parameters");
const input = [
  "54402779",
  "39143786",
  "77408236",
  "35736350",
  "07118545",
  "21452698",
  "55706737",
  "40258035",
  "39143786",
  "52017607",
];

test("it should still return false when there are non-unique IDs in the input array", () => {
  expect(areAllIdsUnique(input)).toBe(false);
});
