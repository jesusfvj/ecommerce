import { useContext } from 'react';
import { TaskContext } from '../../pages';
import deleteIcon from '../../assets/images/deleteIcon.png';
import rewriteIcon from '../../assets/images/rewriteIcon.png';
import circleIcon from '../../assets/images/circleIcon.png';
import checkedIcon from '../../assets/images/checkedIcon.png';
import './AllList.css';

export const AllList = () => {
  let { task, setTask } = useContext(TaskContext);

  const completeWish = (e) => {
    e.target.src = checkedIcon;
    const idElement = e.target.parentNode.parentNode.dataset.id;
    task.find(value => value.id == idElement).done = true;
    localStorage.setItem("wish-list", JSON.stringify(task));
  }

  const deleteWish =(e) => {
    const idElement = e.target.parentNode.parentNode.dataset.id;
    task = task.filter((object) => {
      return object.id != idElement;
    });
    setTask(task);
  }

  return (
    <section className='all-list-section-container'>
      <ul className='wish-list-container'>
        {task.map(({ text, id, done }, index) => {
          return (
            <li key={index} data-id={id} className='wish-list-elements'>
              <p>{text}</p>
              <div className='icons-container'>
                <img className='checked-icon' src={done===false ? circleIcon : checkedIcon} alt='checked icon' onClick={completeWish}/>
                <img className='delete-icon' src={deleteIcon} alt='delete icon' onClick={deleteWish}/>
                <img className='rewrite-icon' src={rewriteIcon} alt='rewrite icon' />
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
