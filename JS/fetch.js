const url="https://api.github.com/users/Ankita05singh";
const res=fetch(url);
res.then((resp)=>{
    return resp.text();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
   console.log("Error",err);
})
.finally(()=>{
    console.log("Finally executed")
})


