const customerIds = [
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

/**
 * This function checks if all the product IDs being displayed
 * in the digital storefront in the list are unique.
 *
 * (We wouldn't want to show the same product twice)
 *
 * There is a bug in this function that is causing it to return the wrong answer
 *
 * (39143786) exists twice in the input list, so the call on line 36 should return false
 *
 * Can you spot the bug?  (hint: its just one line of code in this function)
 */
function areAllIdsUnique(allIds) {
  for (let id of allIds) {
    const isThisIdUnique = isUnique(allIds, id);
    console.log(isThisIdUnique, id)
    if (!isThisIdUnique) {
      return false;
    }
  }
  return true;
}

console.log(areAllIdsUnique(customerIds));

/**
 * This is a function that checks if an ID is unique in the list.
 * You won't need to change this code.
 *
 * allIds should be the list of all customer IDs
 * thisId should be the current ID we are checking for uniqueness
 */
// index = 1
const ids = ['a', 'b', 'c', 'b']

function isUnique(allIds, thisId) {
  // get the index of the id we want
  for (let i = allIds.indexOf(thisId); i < allIds.length; i++) {
    if (allIds[i] === thisId) {
      return false;
    }
  }
  return true;
}

// console.log(isUnique(ids, 'a'))

module.exports = areAllIdsUnique;
