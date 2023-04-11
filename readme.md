# JavaScript Functions WBP

![The Scenario](/assets/banner-scenario.png)

You work for a company that publishes a small digital storefront that sells promotional goods for touring bands. The codebase is old, and many developers with different preferences for function syntax have worked on it over the past few years.

---

![Requirements](/assets/banner-requirements.png)

1. Refactoring some parts of the code to reduce unnecessary repetition (DRY: Don't Repeat Yourself). 
2. Fix the known bugs in the code that need to be fixed caused by incorrect use of function calls.

For this project, there won't be any need to open a browser. All of your code will be running on Node.js, and all your results will be visible in your terminal.

---

![Tickets](/assets/banner-tickets.png)

[Trello Board Tickets](https://trello.com/b/V2tKlN6Y/javascript-functions)
![Trello Board](/assets/M1L5.1-functions-trello-board.png)
- In the `refactor.js` file, rework the `previewFullPrice()` function with DRYer code.
- Fix the error in the `hoisting.js` file.
- Fix the bug in the `areAllIdsUnique()` function in the `parameters.js` file.
- In the `firstClassFunctions.js` file, rework the `formatProducts()` function with DRYer code.

---

![Coding Practice](/assets/banner-coding.png)

### Step 1:

- Fork and clone [this](https://git.generalassemb.ly/SEI-Standard-Curriculum/M1L5.1-functions-wbp) repository. (Make sure you are logged in to your GitHub Enterprise account)

### Step 2:

- Open your editor and navigate to `/Refactoring/refactor.js`
- This file contains a function that calculates the full price after tax and shipping for a few of the most commonly sold products. The code is very repetitive, as the previous developer would always copy and paste a block of code every time a new product was added.
- Can you improve this code by writing and extracting the repeated behavior into a new function?
  - The code already returns the expected result and passes the automated test, so you will know your refactor is successful if it shortens the code, and the tests still pass after your changes.

### Step 3:

- Navigate to `/hoisting/hoisting.js`
- This file contains a set of functions that were implemented by different developers over a long span of time, so each function is defined using a different syntax.
- This code will throw an error when run, can you find a way to fix it by only re-ordering the lines of code?

### Step 4:

- Navigate to `/parameters/parameters.js`
- This file contains two functions:
  - `areAllIdsUnique()` is a function that takes an array of product IDs and returns true if all the IDs are unique.
  - `isUnique()` is a function that takes a list of all the IDs, and a single ID, and returns true if that ID is unique in the list.
- There is a bug on one line in the `areAllIdsUnique()` function. Can you find it and fix it so the function works as expected?

<details>
<summary>hint</summary>
Are arguments passed by name or by order?
</details>

### Step 5:

- Navigate to `/firstClassFunctions/firstClassFunctions.js`
- This file contains a function called `formatProducts()`
- Just like in `Refactoring/refactor.js`, we want to reduce repetition in this function. The main difference is that each call to `.map()` takes a function as its argument.
- Can you refactor this code by extracting the repeated behavior into a DRYer function?
  - This code already works and passes the tests. You will know your refactoring is successful if the code becomes shorter, and the tests still pass after your changes.
