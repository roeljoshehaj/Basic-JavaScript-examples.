document.write("<h2>Maps and Sets Example</h2>");
let myMap = new Map();
myMap.set("name", "Roeljo");
document.write("<p>Map Value (name): " + myMap.get("name") + "</p>");

let mySet = new Set([1, 2, 3, 3]);
document.write("<p>Set Values: " + Array.from(mySet).join(", ") + "</p>");
