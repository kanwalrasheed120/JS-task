
function calculateDiscount(price, discount) {

    let discountAmount = (price * discount) / 100;

    let finalPrice = price - discountAmount;

    return finalPrice;
}

let result = calculateDiscount(1000, 20);

console.log("Original Price: 1000");
console.log("Discount: 20%");
console.log("Final Price:", result);
