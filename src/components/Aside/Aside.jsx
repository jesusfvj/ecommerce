import { useContext } from 'react';
import InputContext from '../../context/InputContext.jsx';
import addIcon from '../../assets/images/addIconGrey.png';
import eyeIcon from '../../assets/images/eyeIcon.png';
import checkedIcon from '../../assets/images/checkedIcon.png';
import nowIcon from '../../assets/images/nowIcon.png';
import broomIcon from '../../assets/images/broomIcon.png';

export const Aside = () => {
  const {setInputRef, setClicked, inputRef} = useContext(InputContext);
  const { task } = useContext(InputContext);

  const handleClick = () => {
    setInputRef(inputRef);
    setClicked(true);
  }

  return (
    <aside className='aside-container'>
      <img className={`aside-icons ${task.length === 0 && `add-icon`}`} src={addIcon} alt="add icon" onClick={handleClick} />
      <img className='aside-icons' src={eyeIcon} alt="all list icon" />
      <img className='aside-icons' src={nowIcon} alt="pending icon" />
      <img className='aside-icons' src={checkedIcon} alt="completed icon" />
      <img className='aside-icons' src={broomIcon} alt="clear all icon" />
      <p className='aside-number-wishes'>{task.length} items</p>
    </aside>
  )
}
