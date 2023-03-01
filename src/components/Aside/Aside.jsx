import { useContext } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import InputContext from '../../context/InputContext.jsx';
import eyeIcon from '../../assets/images/eyeIcon.png';
import nowIcon from '../../assets/images/nowIcon.png';
import broomIcon from '../../assets/images/broomIcon.png';
import addIcon from '../../assets/images/addIconGrey.png';
import checkedIcon from '../../assets/images/checkedIcon.png';
import pendingIcon from '../../assets/images/pendingIcon.png';
import nowIconBlack from '../../assets/images/nowIconBlack.png';
import eyeIconBlack from '../../assets/images/eyeIconBlack.png';
import checkedIconBlack from '../../assets/images/checkedIconBlack.png';
import pendingIconBlack from '../../assets/images/pendingIconBlack.png';

export const Aside = () => {
  const {setInputRef, setClicked, inputRef} = useContext(InputContext);
  const { task, setTask } = useContext(InputContext);
  const location = useLocation();

  const handleClickAdd = () => {
    setInputRef(inputRef);
    setClicked(true);
  }

  const handleClickBroom = () => {
    const filteredTasks = task.filter(
      (taskToReturn) => taskToReturn.done != true
      );
    setTask(filteredTasks);
    localStorage.setItem("wish-list", JSON.stringify(task));
  }

  return (
    <aside className='aside-container'>
      <img className={`aside-icons ${task.length === 0 && `add-icon`}`} src={addIcon} alt="add icon" onClick={handleClickAdd} />
      <NavLink to="/">
      <img className='aside-icons' src={`${location.pathname === "/" ? eyeIconBlack : eyeIcon}`} alt="all list icon" title="View all wishes"/>
      </NavLink>
      <NavLink to="/pending">
      <img className='aside-icons' src={`${location.pathname === "/pending" ? pendingIconBlack : pendingIcon}`} alt="pending icon" title='Pending wishes'/>
      </NavLink>
      <NavLink to="/in-progress">
      <img className='aside-icons' src={`${location.pathname === "/in-progress" ? nowIconBlack : nowIcon}`} alt="in progress icon" title='In progress wishes'/>
      </NavLink>
      <NavLink to="/completed">
      <img className='aside-icons' src={`${location.pathname === "/completed" ? checkedIconBlack : checkedIcon}`} alt="completed icon" title='Completed wishes'/>
      </NavLink>
      <NavLink to="/completed">
      <img className='aside-icons' src={broomIcon} alt="clear all icon" onClick={handleClickBroom} title='Clear completed wishes'/>
      </NavLink>
      <p className='aside-number-wishes'>{task.length} items</p>
    </aside>
  )
}