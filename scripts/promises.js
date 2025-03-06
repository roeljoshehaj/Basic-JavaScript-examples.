document.write("<h2>Simple Promise Example</h2>");

const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Task completed successfully!");
    } else {
        reject("Task failed.");
    }
});

myPromise
    .then(message => document.write("<p>Success: " + message + "</p>"))
    .catch(error => document.write("<p>Error: " + error + "</p>"));
