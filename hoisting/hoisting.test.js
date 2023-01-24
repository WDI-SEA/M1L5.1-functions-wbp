const greetingGenerator = require("./hoisting");

test("it should return the expected value without a typeError", () => {
  expect(greetingGenerator("John Doe", "JavaScript Store")).toBe(
    "Hello John Doe! Welcome to the JavaScript Store!"
  );
});
