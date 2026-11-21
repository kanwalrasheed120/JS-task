
let sales = [
    [12000, 15000, 11000, 14000],
    [10000, 18000, 16000, 13000],
    [17000, 14000, 19000, 16000]
];

let totalAll = 0;
let highestTotal = 0;
let highestBranch = 0;

for (let i = 0; i < sales.length; i++) {

    let branchTotal = 0;

    console.log("Branch", i + 1, "Sales:");

    for (let j = 0; j < sales[i].length; j++) {

        console.log("Day", j + 1, ":", sales[i][j]);

        branchTotal = branchTotal + sales[i][j];
    }

    console.log("Branch", i + 1, "Total Sales:", branchTotal);

    totalAll = totalAll + branchTotal;

    if (branchTotal > highestTotal) {
        highestTotal = branchTotal;
        highestBranch = i + 1;
    }
}

console.log("Total Sales of All Branches:", totalAll);
console.log("Highest Sales Branch: Branch", highestBranch);
console.log("Highest Sales:", highestTotal);
