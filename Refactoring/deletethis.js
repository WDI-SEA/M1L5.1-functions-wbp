const items = [
    { name: 'Shirt', price: 30.99 },
    { name: 'Sweatshirt', price: 40.99 },
    { name: 'Small Poster', price: 15.99 },
    { name: 'Large Poster', price: 22.99 },
    { name: 'Mug', price: 12.99 },
  ];

function calculatePrice (itemPrice, salesTax, shippingPrice) {
    const priceAfterTax = itemPrice * (1 + salesTax);
    const priceAfterShipping = priceAfterTax + shippingPrice;
    const priceAfterShippingRounded = priceAfterShipping.toFixed(2);
    return priceAfterShippingRounded;
}

for (let i=0; i < items.length; i++){
  let itemPrice = items[i];
  const totalPrice = calculatePrice(itemPrice, salesTax, shippingPrice);
  console.log(`${item.name}: ${item.price}`);
}












// function previewFullPrice(item){
//     priceAfterTax = item * (1 + salesTax);
// }

const items = [
  { name: 'Shirt', price: 30.99 },
  { name: 'Sweatshirt', price: 40.99 },
  { name: 'Small Poster', price: 15.99 },
  { name: 'Large Poster', price: 22.99 },
  { name: 'Mug', price: 12.99 },
];

function calculatePrice (itemPrice, salesTax, shippingPrice) {
  const priceAfterTax = itemPrice * (1 + salesTax);
  const priceAfterShipping = priceAfterTax + shippingPrice;
  const priceAfterShippingRounded = priceAfterShipping.toFixed(2);
  return priceAfterShippingRounded;
}

for (let i=0; i < items.length; i++){
let itemPrice = items[i];
const totalPrice = calculatePrice(itemPrice, 0.08, 4); // used 0.08 and 4 as placeholders for salestax and shipping price.
// console.log(`${item.name}: ${item.price}`);
return totalPrice;






