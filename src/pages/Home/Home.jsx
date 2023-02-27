import React, { useState } from 'react'
import { Header, Body } from '../../components/index.js';

export const InputContext = React.createContext();
export const TaskContext = React.createContext();

export const Home = () => {
  const [inputRef, setInputRef] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [task, setTask] = useState([]);
  
  return (
    <InputContext.Provider value={{ inputRef, setInputRef, clicked, setClicked }}>
      <TaskContext.Provider value={{ task, setTask }}>
        <section>
          <Header />
          <Body />
        </section>
      </TaskContext.Provider>
    </InputContext.Provider>
  )
}
