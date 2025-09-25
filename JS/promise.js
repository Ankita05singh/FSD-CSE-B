function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Login end");
            resolve();
        }, 2000);
    });
}

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data Received");
            resolve();
        }, 2000);
    });
}

function displayData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data Displayed");
            resolve();
        }, 2000);
    });
}
function attemptTest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("test attempted");
            resolve();
        }, 2000);
    });
}
function logout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("logout successfully");
            resolve();
        }, 2000);
    });
}

// Promise chaining
login()
    .then(getData)
    .then(displayData)
    .then(attemptTest)
    .then(logout)
    .catch((err) => {
        console.log("Error:", err);
    });

console.log("Call other Application");
