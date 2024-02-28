"use client";
import { Product } from "@/components/product";
import React from "react";
export default function ProductPage({ params }){
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        console.log("Something changed!");
    
    }, [count])
    console.log("hello world");
    return(
        <div>
        <h1>This is the product page.</h1>
        {/* <h2>{params.productID}</h2> */}
        <Product productID = {params.productID}/>
        <button onClick={() => setCount(count+1)}>Click me!</button>
        <h2>{count}</h2>
        </div>
    );
}