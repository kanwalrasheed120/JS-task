function weeklySales(sales) {
    let total = 0;
    let count = 0;

    for (let i = 0; i < sales.length; i++) {
        total = total + sales[i];

        if (sales[i] >= 10000) {
            count++;
        }
    }

    let average = total / sales.length;

    return {
        totalSales: total,
        averageSales: average,
        daysAboveTarget: count
    };
}

let sales = [12000, 8000, 15000, 10000, 9000, 11000, 14000];

let result = weeklySales(sales);

console.log("Total Weekly Sales:", result.totalSales);
console.log("Average Daily Sales:", result.averageSales);
console.log("Days with Sales of 10000 or More:", result.daysAboveTarget);

if (result.averageSales >= 10000) {
    console.log("Weekly Target: Achieved");
}
else {
    console.log("Weekly Target: Not Achieved");
}