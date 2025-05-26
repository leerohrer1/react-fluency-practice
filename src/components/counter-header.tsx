// React is all about components, and often you'll have components within components. Managing the state between these components
// can be tricky, but it's a crucial skill for any React developer.
// For this exercise, create a parent component with a piece of state. Then, create a child component that can update this state.

interface countProp {
  count: number;
}

export default function CounterHeader({ count }: countProp) {
  return (
    <>
      <h1>Counter is at {count}</h1>
    </>
  );
}

// import React, { useState } from 'react';

//     function ChildComponent({ updateParentState }) {
//       return (
//         <button onClick={() => updateParentState('New State')}>
//           Update Parent State
//         </button>
//       );
//   

//     function ParentComponent() {
//       const [state, setState] = useState('Initial State');

//       return (
//         <div>
//           <p>State: {state}</p>
//           <ChildComponent updateParentState={setState} />
//         </div>
//       );
//     }

//     export default ParentComponent;
