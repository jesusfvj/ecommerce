import { useRef, useContext, useEffect, useState } from 'react';
import InputContext from '../../context/InputContext.jsx';
import './Header.css';
import icon from '../../assets/images/addIconWhite.png';

export const Header = () => {
  const { task, setTask, setInputRef, setClicked, clicked } = useContext(InputContext);
  const inputRef = useRef(null);
  const [counter, setCounter] = useState(0);
  const [formData, setFormData] = useState({
    id:  null,
    text: "",
    pending: true,
    inProgress: false,
    done: false,
    isEditing: false,
  });
  
  const handleChangeFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, ["id"]:counter });
    inputRef.current.placeholder = "Type your wish here";
  };
  
  const uploadForm = (e) => {
    e.preventDefault();
    if (e.target.text.value !== "") {
      setCounter(prevState => prevState + 1);
      setTask([...task, formData])
    }else{
      inputRef.current.placeholder = "You must write a wish first";
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
    inputRef.current.value = "";
    localStorage.setItem("wish-list", JSON.stringify(task));
  }, [task]);

  return (
    <header className="header-container">
      <h1 className="header-h1">WISHLIST</h1>
      <form onSubmit={uploadForm}>
        <div className="header-input-container">
          <input
            value={formData.text}
            name="text"
            type="text"
            placeholder="Type your wish here"
            className="header-input"
            ref={inputRef}
            onChange={handleChangeFormData}/>
          <button className="input-create-wish-button">
            <img className="create-wish-icon" src={icon} alt="create icon"></img>
          </button>
        </div>
      </form>
    </header>
  )
}
