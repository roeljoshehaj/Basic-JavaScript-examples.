import { greet } from './modules.js';
const output = document.createElement("div");
document.body.appendChild(output);
output.innerHTML += "<h2>Modules Example</h2>";
output.innerHTML += "<p>Greeting: " + greet("Roeljo") + "</p>";
