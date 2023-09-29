const clothingFullPrice = { 
  shirtPrice: 30.99, 
  sweatshirtPrice: 40.99, 
  smallPosterPrice: 15.99,
  largePosterPrice: 22.99,
  mugPrice: 12.99
};

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"