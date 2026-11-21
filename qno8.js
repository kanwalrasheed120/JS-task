function checkGrade(marks) {
    if (marks >= 85) {
        return "A";
    }
    else if (marks >= 70) {
        return "B";
    }
    else if (marks >= 50) {
        return "C";
    }
    else {
        return "Fail";
    }
}

let grade = checkGrade(90);

console.log("Student Marks:", 90);
console.log("Student Grade:", grade);