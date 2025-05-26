"use client";

import { UsernameContext } from "@/context/username-context";
import { useContext, useState } from "react";

export default function UserComponent() {
  const context = useContext(UsernameContext);

  if (!context) {
    throw new Error("UserComponent must be used within a UsernameProvider");
  }

  const { username, setUsername } = context;

  const [inputValue, setInputValue] = useState(username);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUsername(inputValue);
    setInputValue("");
  };

  return (
    <>
      <h2>Welcome, {username}!</h2>
      <p>Update username:</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <br />
        <button type="submit">Update</button>
      </form>
    </>
  );
}
