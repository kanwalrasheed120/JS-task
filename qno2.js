
let marks = [75, 45, 90, 60, 35, 80, 50, 95];

console.log("Original Marks:");
console.log(marks);

// Reverse Order
console.log("Reverse Marks:");

for (let i = marks.length - 1; i >= 0; i--) {
    console.log(marks[i]);
}

// Highest and Lowest Marks
let highest = marks[0];
let lowest = marks[0];

for (let i = 0; i < marks.length; i++) {

    if (marks[i] > highest) {
        highest = marks[i];
    }

    if (marks[i] < lowest) {
        lowest = marks[i];
    }
}

console.log("Highest Marks:", highest);
console.log("Lowest Marks:", lowest);

// Count Passed Students
let passed = 0;

for (let i = 0; i < marks.length; i++) {

    if (marks[i] >= 50) {
        passed++;
    }
}

console.log("Passed Students:", passed);
