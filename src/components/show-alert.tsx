"use client";

import { useState } from "react";

export default function ShowAlert() {
  const [alertText, setAlertText] = useState("");

  function show() {
    alert(alertText);
    setAlertText("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      show();
    }
  }

  return (
    <>
      <input
        type="text"
        value={alertText}
        onChange={(e) => setAlertText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Alert text here..."
      />
      <br />
      <button onClick={show}>Show the alert!</button>
    </>
  );
}
