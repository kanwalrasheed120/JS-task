function calculateBill(price, quantity) {
    let total = price * quantity;

    return total;
}

let bill = calculateBill(500, 3);

console.log("Item Price:", 500);
console.log("Quantity:", 3);
console.log("Total Bill:", bill);