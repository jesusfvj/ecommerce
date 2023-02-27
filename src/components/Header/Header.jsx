import { useRef, useContext, useEffect, useId } from 'react';
import { InputContext, TaskContext } from '../../pages';
import './Header.css';
import icon from '../../assets/images/addIconWhite.png';

export const Header = () => {
  const uniqueId = useId();
  const { setInputRef, setClicked, clicked } = useContext(InputContext);
  const { task, setTask } = useContext(TaskContext);
  const inputRef = useRef(null);

  useEffect(() => {
    setInputRef(inputRef)
    if (inputRef.current) {
      inputRef.current.focus();
      setClicked(false);
    }
  }, [clicked]);

  return (
    <header className="header-container">
            <h1 className="header-h1">WISHLIST</h1>
            <form onSubmit = { ev => {
              ev.preventDefault();
              setTask([
                  {
                    id: uniqueId,
                    text: ev.target.wishSet.value,
                    done: false,
                    isEditing: false,
                  }, ...task])
            }}>
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
