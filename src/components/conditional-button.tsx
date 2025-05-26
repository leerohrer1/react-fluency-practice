// For this exercise, create a component that toggles the visibility of a piece of text when a button is clicked.
// This will give you practice with conditional rendering in React.

"use client";

import { useState } from "react";

export default function ConditionalButton() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <h2>Hide/Unhide</h2>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      <p>
        {isVisible && "This text will toggle when you click the button above."}
      </p>
    </>
  );
}

// // exercise solution
// import React, { useState } from 'react';

//     function ToggleText() {
//       const [isVisible, setIsVisible] = useState(true);

//       return (
//         <div>
//           {isVisible && <p>This text is toggleable</p>}
//           <button onClick={() => setIsVisible(!isVisible)}>
//             Toggle Text
//           </button>
//         </div>
//       );
//     }

//     export default ToggleText;
