import { useContext, useState } from 'react';
import { TaskContext } from '../../pages';
import deleteIcon from '../../assets/images/deleteIcon.png';
import rewriteIcon from '../../assets/images/rewriteIcon.png';
import circleIcon from '../../assets/images/circleIcon.png';
import checkedIcon from '../../assets/images/checkedIcon.png';
import './AllList.css';

export const AllList = () => {
  const { task, setTask } = useContext(TaskContext);
  const [ image, setImage ] = useState(circleIcon);

  const handleClick = () => {
    setImage(checkedIcon);
  }

  return (
    <section className='all-list-section-container'>
      <ul className='wish-list-container'>
        {task.map(({ text }, id) => {
          return (
            <li key={id} className='wish-list-elements'>
              <p>{text}</p>
              <div className='icons-container'>
                <img className='checked-icon' src={image} alt='checked icon' onClick={handleClick}/>
                <img className='delete-icon' src={deleteIcon} alt='delete icon' />
                <img className='rewrite-icon' src={rewriteIcon} alt='rewrite icon' />
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
