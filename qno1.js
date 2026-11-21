let temperatures = [30, 32, 31, 29, 34, 33, 35];

console.log("Weekly Temperatures:");
console.log(temperatures);

let total = 0;

for (let i = 0; i < temperatures.length; i++) {
    total = total + temperatures[i];
}

let average = total / temperatures.length;

console.log("Average Temperature:", average);

let count = 0;

for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > average) {
        count++;
    }
}

console.log("Days Above Average:", count);