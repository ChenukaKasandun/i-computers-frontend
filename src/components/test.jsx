import { useState } from "react";

export default function Test(){
    

    const [count , setCount] =useState(0);

    return(
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-100 h-75 shadow-2xl flex items-center justify-center">
                <button className="w-25 h-12.5 bg-red-600 text-white"
                onClick={()=>{
                   setCount(count - 1);
        
                }}>
                        Decrement
                </button>
                <h1 className="w-25 h-12.5 text-[30px] text-center">{count}</h1>
                 <button className="w-25 h-12.5 bg-blue-600 text-white"
                 onClick={()=>{
                   setCount(count + 1);
                                        
                 }}>
                        Increment
                </button>
            </div>
        </div>
    )
}