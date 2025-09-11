//IIEFi(immediately invoke express functions)

// (funtion()
// {
//     console.log("Inside IIEF")
// }
// ());

// // Callback
// function f1(UserActivation,login)
// {
//     console.log("message")
//     login();
// }
// login();

function waitfortwosec()
{
    const ms=new Date().getTime()+5000;
    while(new Date().getTime()<ms);
}

function register(){
    waitfortwosec();
    console.log("register end");
}


function sendEmail(){
    waitfortwosec();
    console.log("email");
}

function getdata(){
    waitfortwosec();
    console.log("Data received");
}
register();
sendEmail();
getdata();
console.log("Other Application")




