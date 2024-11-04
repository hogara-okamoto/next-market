"use client"
import { useState } from "react" 

export default function () {
    const [count, setCount] = useState(0);
    console.log(count)

    return (
        <div>
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count+1)}>Increment</button>
        </div>
    )
}


