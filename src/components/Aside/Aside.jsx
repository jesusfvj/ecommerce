import { useContext } from 'react';
import { InputContext, TaskContext } from '../../pages';
import addIcon from '../../assets/images/addIconGrey.png';
import eyeIcon from '../../assets/images/eyeIcon.png';
import nowIcon from '../../assets/images/checkedIcon.png';
import checkedIcon from '../../assets/images/nowIcon.png';
import broomIcon from '../../assets/images/broomIcon.png';

export const Aside = () => {
  const {setInputRef, setClicked, inputRef} = useContext(InputContext);
  const { task } = useContext(TaskContext);

  const handleClick = () => {
    setInputRef(inputRef);
    setClicked(true);
  }

  return (
    <aside className='aside-container'>
      <img className={`aside-icons ${task.length === 0 && `add-icon`}`} src={addIcon} alt="" onClick={handleClick} />
      <img className='aside-icons' src={eyeIcon} alt="" />
      <img className='aside-icons' src={nowIcon} alt="" />
      <img className='aside-icons' src={checkedIcon} alt="" />
      <img className='aside-icons' src={broomIcon} alt="" />
      <p className='aside-number-wishes'>{task.length} items</p>
    </aside>
  )
}
