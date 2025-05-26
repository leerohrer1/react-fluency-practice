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
  };

  return (
    <>
      <h2>Welcome, {username}!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder={`Username: ${username}`}
        />
        <br />
        <button type="submit">Update Username</button>
      </form>
    </>
  );
}
