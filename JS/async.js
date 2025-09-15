// function register(){
//     waitfortwosec();
//     console.log("Register end");
// }
// function sendEmail(){
//     waitfortwosec();
//     console.log("Email send end");
// }
// function login(){
//     waitfortwosec();
//     console.log("login end");
// }
// function getData(){
//     waitfortwosec();
//     console.log("Data received");
// }
// function displayData(){
//     waitfortwosec();
//     console.log("Data is diplayed");
// }
// function waitfortwosec(){
//     const ms=new Date().getTime()+2000;
//     while(new Date().getTime()<ms);
// }

// register();
// sendEmail();
// login();
// getData;
// displayData();

function register(Cb){
    setTimeout(()=>{
        console.log("Register end");
        Cb();
    },2000)
}
function sendEmail(Cb){
    setTimeout(()=>{
        console.log("Email send end");
        Cb();
    },2000)
}
function login(Cb){
    setTimeout(()=>{
        console.log("login end");
        Cb();
    },2000)
}
function getData(Cb){
    setTimeout(()=>{
        console.log("Data Received");
        Cb();
    },2000)
}
function displayData(Cb){
    setTimeout(()=>{
        console.log("Data Displayed");
        Cb();
    },2000)
}

//Callback Hell
register(()=>{
    sendEmail(()=>{
        login(()=>{
            getData(()=>{
                displayData();
            });
        });
    });
});
