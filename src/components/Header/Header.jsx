import { useRef, useContext, useEffect, useState } from 'react';
import { InputContext, TaskContext } from '../../pages';
import './Header.css';
import icon from '../../assets/images/addIconWhite.png';

export const Header = () => {
  const [counter, setCounter] = useState(0);
  const { setInputRef, setClicked, clicked } = useContext(InputContext);
  const { task, setTask } = useContext(TaskContext);
  const inputRef = useRef(null);
  
  const uploadForm = (ev) => {
    ev.preventDefault();
    if(ev.target.wishSet.value!==""){
      setCounter(prevState => prevState + 1);
      setTask([
          {
            id: counter,
            text: ev.target.wishSet.value,
            done: false,
            isEditing: false,
          }, ...task])
      ev.target.wishSet.value = "";
    } else {
      ev.target.wishSet.value = "You must write a wish first";
    }
  }

  useEffect(() => {
    setInputRef(inputRef)
    if (inputRef.current) {
      inputRef.current.focus();
      setClicked(false);
    }
  }, [clicked]);

  useEffect(() => {
    localStorage.setItem("wish-list", JSON.stringify(task));
  }, [task]);

  return (
    <header className="header-container">
            <h1 className="header-h1">WISHLIST</h1>
            <form onSubmit = {uploadForm}>
                <div className="header-input-container">
                <input className="header-input" type="text" name="wishSet" placeholder="Type your wish here" ref={inputRef}/>
                    <div className="input-create-wish-container">
                        <img className="create-wish-icon" src={icon} alt="create icon"></img>
                    </div>
                </div>
            </form>
    </header>
  )
}
