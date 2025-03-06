document.write("<h2>Declarative Methods Example</h2>");
let numbers = [1, 2, 3, 4, 5];
document.write("<p>Original Array: " + numbers.join(", ") + "</p>");

let doubled = numbers.map(n => n * 2);
document.write("<p>Doubled Values:" + doubled.join(", ") + "</p>");

let filtered = numbers.filter(n => n > 2);
document.write("<p>Filtered (Greater than 2): " + filtered.join(", ") + "</p>");

let sum = numbers.reduce((acc, curr) => acc + curr, 0);
document.write("<p>Sum of Elements: " + sum + "</p>");

