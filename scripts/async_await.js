document.write("<h2>Async and Await Example</h2>");

async function fetchData() {
    return "Data received!";
}

fetchData().then(data => {
    document.write("<p>Result:</p> " + data + "</p>");
});
