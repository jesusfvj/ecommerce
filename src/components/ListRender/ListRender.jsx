import React from 'react'
import './ListRender.css';
import deleteIcon from '../../assets/images/deleteIcon.png';
import rewriteIcon from '../../assets/images/rewriteIcon.png';
import nowIcon from '../../assets/images/nowIcon.png';
import pendingIcon from '../../assets/images/pendingIcon.png';
import nowIconBlack from '../../assets/images/nowIconBlack.png';
import pendingIconBlack from '../../assets/images/pendingIconBlack.png';
import checkedIcon from '../../assets/images/checkedIcon.png';
import checkedIconBlack from '../../assets/images/checkedIconBlack.png';
import { useContext, useRef } from 'react';
import InputContext from '../../context/InputContext.jsx';

export const ListRender = ({object}) => {
  const { task, setTask } = useContext(InputContext);
  const pendingIconRef = useRef([]);
  const inProgressIconRef = useRef([]);
  const checkedIconRef = useRef([]);

  const completeWish = (e) => {
    const idElement = e.target.parentNode.parentNode.dataset.id;
    checkedIconRef.current[idElement].src = checkedIconBlack;
    pendingIconRef.current[idElement].src = pendingIcon;
    inProgressIconRef.current[idElement].src = nowIcon;
    task.forEach(value => {
      if(value.id == idElement){
        value.done = true;
        value.pending = false;
        value.inProgress = false;
      }
    })
    setTask(task);
    localStorage.setItem("wish-list", JSON.stringify(task));
  }

  const pendingWish = (e) => {
    const idElement = e.target.parentNode.parentNode.dataset.id;
    checkedIconRef.current[idElement].src = checkedIcon;
    pendingIconRef.current[idElement].src = pendingIconBlack;
    inProgressIconRef.current[idElement].src = nowIcon;
    task.forEach(value => {
      if(value.id == idElement){
        value.done = false;
        value.pending = true;
        value.inProgress = false;
      }
    })
    setTask(task);
    localStorage.setItem("wish-list", JSON.stringify(task));
  }

  const inProgressWish = (e) => {
    const idElement = e.target.parentNode.parentNode.dataset.id;
    checkedIconRef.current[idElement].src = checkedIcon;
    pendingIconRef.current[idElement].src = pendingIcon;
    inProgressIconRef.current[idElement].src = nowIconBlack;
    task.forEach(value => {
      if(value.id == idElement){
        value.done = false;
        value.pending = false;
        value.inProgress = true;
      }
    })
    setTask(task);
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
      {object.map((element, index) => {
        return (
          <li key={index} data-id={element.id} className='wish-list-elements'>
            <p>{element.text}</p>
            <div className='icons-container'>
              <img className='list-icons pending-icon' src={element.pending===false ? pendingIcon : pendingIconBlack} alt='pending icon' ref={(elementRef) => (pendingIconRef.current[element.id] = elementRef)} onClick={pendingWish}/>
              <img className='list-icons in-progress-icon' src={element.inProgress===false ? nowIcon : nowIconBlack} alt='in progress icon' ref={(elementRef) => (inProgressIconRef.current[element.id] = elementRef)} onClick={inProgressWish}/>
              <img className='list-icons checked-icon' src={element.done===false ? checkedIcon : checkedIconBlack} alt='checked icon' ref={(elementRef) => (checkedIconRef.current[element.id] = elementRef)} onClick={completeWish}/>
              <img className='list-icons delete-icon' src={deleteIcon} alt='delete icon' onClick={()=>deleteWish(element)}/>
              <img className='list-icons rewrite-icon' src={rewriteIcon} alt='rewrite icon' />
            </div>
          </li>
        )
      })}
    </ul>
  </section>
  )
}
