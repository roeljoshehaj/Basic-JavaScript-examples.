document.write("<h2>Arrow Functions Example</h2>");

const add = (a, b) => a + b;
document.write("<p>3 + 5 =  " + add(3, 5) + "</p>");

const greet = name => `Hello, ${name}!`;
document.write("<p>Greeting: " + greet("Roeljo") + "</p>");

const double = num => num * 2;
document.write("<p>Double of 33 is  " + double(33) + "</p>");
