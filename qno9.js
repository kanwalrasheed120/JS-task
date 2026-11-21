function calculateDelivery(orderAmount, distance) {
    let deliveryCharge;

    if (orderAmount >= 2000 && distance <= 5) {
        deliveryCharge = 0;
    }
    else if (distance <= 5) {
        deliveryCharge = 100;
    }
    else {
        let extraDistance = distance - 5;
        deliveryCharge = 100 + (extraDistance * 20);
    }

    return deliveryCharge;
}

let orderAmount = 1500;
let distance = 7;

let charge = calculateDelivery(orderAmount, distance);
let finalBill = orderAmount + charge;

console.log("Order Amount:", orderAmount);
console.log("Delivery Distance:", distance, "km");
console.log("Delivery Charge:", charge);
console.log("Final Bill:", finalBill);