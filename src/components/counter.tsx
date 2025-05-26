// Create a counter component that starts at zero and increments by one each time a button is clicked.
// This exercise will help you practice working with state and event handlers in React.

"use client";

import { useState } from "react";
import CounterHeader from "./counter-header";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <CounterHeader count={count} />
      <h2>Counter</h2>
      <button onClick={handleClick}>Click count: {count}</button>
    </>
  );
}

// // exercise solution given
//  import React, { useState } from 'react';

//     function Counter() {
//       const [count, setCount] = useState(0);

//       return (
//         <div>
//           <p>You clicked {count} times</p>
//           <button onClick={() => setCount(count + 1)}>
//             Click me
//           </button>
//         </div>
//       );
//     }

//     export default Counter;
