// The Context API is a powerful feature in React that allows you to share state between multiple components without having to pass
// props down manually at every level. It's a bit like a global variable for your React app.
// For this exercise, create a context that holds a user's name and a function to update it. Then, create a child component that displays
// the user's name and a button to change it.

"use client";

import { createContext, useState } from "react";

type UsernameContextType = {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
};

export const UsernameContext = createContext<UsernameContextType | undefined>(
  undefined
);

export default function UsernameProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [username, setUsername] = useState<string>("lee");

  return (
    <UsernameContext.Provider value={{ username, setUsername }}>
      {children}
    </UsernameContext.Provider>
  );
}

// // solution given
// import React, { useState, createContext, useContext } from 'react';

//     const UserContext = createContext();

//     function UserProvider({ children }) {
//       const [name, setName] = useState('John Doe');

//       const value = {
//         name,
//         changeName: () => setName('Jane Doe')
//       };

//       return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
//     }

//     function ChildComponent() {
//       const { name, changeName } = useContext(UserContext);

//       return (
//         <div>
//           <p>Name: {name}</p>
//           <button onClick={changeName}>Change Name</button>
//         </div>
//       );
//     }

//     function App() {
//       return (
//         <UserProvider>
//           <ChildComponent />
//         </UserProvider>
//       );
//     }

//     export default App;
