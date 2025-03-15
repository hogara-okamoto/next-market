"use client"
import { useEffect, useState } from "react" 

export default function IntervalPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    
      console.log(interval); // Logs the interval ID
    
      return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <p>This page updates the count every second.</p>
    </div>
  );
}