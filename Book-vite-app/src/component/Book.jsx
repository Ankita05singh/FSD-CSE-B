import React from "react";
import { useState } from 'react';
import '../App.css'
const Book=({book})=>{
    const [count,setCount]=useState(0);
    function decreamnetCount(){
        let mycount=0;
        mycount=count+1;
        setCount(mycount)
    }
    function increamnetCount(){
        let mycount=0;
        if(count>0)
        mycount=count-1;
        setCount(mycount)
    }
    function handleButton(){
        alert("Book Added in Cart Successfully")
    }
    return (
        <div className="card">
            <img src={book.image} width="200" height="200" alt="image" />
            <h3>Title:{book.title}</h3>
            <h4>Price:{book.price}</h4>
            <div>
            <button onClick={decreamentCount}>-</button>
            <span>{count}</span>
            <button onClick={increamentCount}>+</button>
            </div>
            <button onclick={handleButton}>Add To Cart</button>
        </div>
    )
}
