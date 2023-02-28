import { useContext, useEffect } from 'react';
import InputContext from '../../context/InputContext.jsx';
import deleteIcon from '../../assets/images/deleteIcon.png';
import rewriteIcon from '../../assets/images/rewriteIcon.png';
import circleIcon from '../../assets/images/circleIcon.png';
import checkedIcon from '../../assets/images/checkedIcon.png';
import './AllList.css';

export const AllList = () => {
  const { task, setTask } = useContext(InputContext);

  const completeWish = (e) => {
    e.target.src = checkedIcon;
    const idElement = e.target.parentNode.parentNode.dataset.id;
    const taskFind = task.find(value => value.id == idElement).done = true;
    setTask(taskFind);
    localStorage.setItem("wish-list", JSON.stringify(task));
  }

  const deleteWish = (element) => {
    const filteredTasks = task.filter(
      (taskToReturn) => taskToReturn.text !== element.text
    );
    setTask(filteredTasks);
  }

  return (
    <section className='all-list-section-container'>
      <ul className='wish-list-container'>
        {task.map((element, index) => {
          return (
            <li key={index} data-id={element.id} className='wish-list-elements'>
              <p>{element.text}</p>
              <div className='icons-container'>
                <img className='checked-icon' src={element.done===false ? circleIcon : checkedIcon} alt='checked icon' onClick={completeWish}/>
                <img className='delete-icon' src={deleteIcon} alt='delete icon' onClick={()=>deleteWish(element)}/>
                <img className='rewrite-icon' src={rewriteIcon} alt='rewrite icon' />
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
