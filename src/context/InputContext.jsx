import { createContext, useState } from "react";
import React from "react";

export const InputContext = React.createContext();

export const InputProvider = ({ children }) => {
  const [inputRef, setInputRef] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [editText, setEditText] = useState(false);

  const [task, setTask] = useState(JSON.parse(localStorage.getItem("wish-list")) || []);
  
  return (
    <InputContext.Provider value={{ inputRef, setInputRef, clicked, setClicked, task, setTask, editText, setEditText }}>
      {children}
    </InputContext.Provider>
  );
};

export default InputContext