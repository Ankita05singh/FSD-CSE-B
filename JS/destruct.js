const num=[10,20,30,40,50];
//
//Array destructing

// const a=num[0];
// const b=num[1];
// const c=num[2];
// const d=num[3];
// const e=num[4];

const [a,b,c,d,e]=num;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e); 

//Object destructuring
const [f,s,...rset]=num;
const obj={name:"abc",id:2,email:"abc@gmail.com"}
const {objname,...other}=obj;
const arr=[1,2];
const arr1=[3,4,5];
// const name=obj.name;
// const id=obj.id;
// const email=obj.email;


const {name,id,email}=obj;
console.log(name);
console.log(id);
console.log(email);





