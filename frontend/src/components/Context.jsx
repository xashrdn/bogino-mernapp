import React, { useState } from "react";
import { createContext } from "react";
export const EmailContext = createContext();

const Context = ({ children }) => {
  const [emailValue, setEmailValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [pwMatchValue, setPwMatchValue] = useState("");
  return (
    <EmailContext.Provider
      value={{
        emailValue,
        setEmailValue,
        pwValue,
        setPwValue,
        pwMatchValue,
        setPwMatchValue,
      }}
    >
      {children}
    </EmailContext.Provider>
  );
};

export default Context;
