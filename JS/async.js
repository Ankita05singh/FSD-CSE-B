function register(){
    waitfortwosec();
    console.log("Register end");
}
function sendEmail(){
    waitfortwosec();
    console.log("Email send end");
}
function login(){
    waitfortwosec();
    console.log("login end");
}
function getData(){
    waitfortwosec();
    console.log("Data received");
}
function displayData(){
    waitfortwosec();
    console.log("Data is diplayed");
}
function waitfortwosec(){
    const ms=new Date().getTime()+2000;
    while(new Date().getTime()<ms);
}

register();
sendEmail();
login();
getData;
displayData();