"use client";

import { useState } from "react";

export default function StringStateVariables() {
  const [firstName, setFirstName] = useState("John");
  const [nickName, setNickName] = useState("JD");
  const [lastName, setLastName] = useState("Bhise");
  const field = "mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5";
  return (
    <div id="wd-string-state-variables">
      <h2>String State Variables</h2>
      <p>
        {firstName} {lastName}
      </p>
      <p>{nickName}</p>
      <input
        className={field}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        id="wd-first-name"
      />
      <input
        className={field}
        value={nickName}
        onChange={(e) => setNickName(e.target.value)}
        id="wd-nick-name"
      />
      <input
        className={field}
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        id="wd-last-name"
      />
      <hr />
    </div>
  );
}
