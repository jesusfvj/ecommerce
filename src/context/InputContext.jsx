import { createContext, useState } from "react";
import React from "react";

export const InputContext = React.createContext();

export const InputProvider = ({ children }) => {
  const [inputRef, setInputRef] = useState(null);
  const [clicked, setClicked] = useState(false);

  const items = JSON.parse(localStorage.getItem("wish-list"));
  const [task, setTask] = useState(items);

  return (
    <InputContext.Provider value={{ inputRef, setInputRef, clicked, setClicked, task, setTask }}>
      {children}
    </InputContext.Provider>
  );
};

export default InputContext