// Create a function that takes the age in years and returns the age in days.

// Examples
// calcAge(65) ➞ 23725

// calcAge(0) ➞ 0

// calcAge(20) ➞ 7300

// var days = (new Date() - new Date(2003, 03, 1)) / (1000 * 60 * 60 * 24);
// console.log(days);

function calcAge(age) {
    return age * 365
}
console.log(calcAge(23));