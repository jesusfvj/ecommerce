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
import thumbUpIcon from '../../assets/images/thumbUpIcon.png';
import thumbDownIcon from '../../assets/images/thumbDownIcon.png';
import { useContext, useRef, useState } from 'react';
import InputContext from '../../context/InputContext.jsx';

export const ListRender = ({ object }) => {
  const { task, setTask } = useContext(InputContext);
  const [editText, setEditText] = useState(false);
  const [editElement, setEditElement] = useState(null);
  const [editString, setEditString] = useState("");
  const pendingIconRef = useRef([]);
  const inProgressIconRef = useRef([]);
  const checkedIconRef = useRef([]);
  const textRef = useRef([]);
  const inputEditRef = useRef(null);

  const completeWish = ({ id }) => {
    checkedIconRef.current[id].src = checkedIconBlack;
    pendingIconRef.current[id].src = pendingIcon;
    inProgressIconRef.current[id].src = nowIcon;
    task.forEach(value => {
      if (value.id == id) {
        value.done = true;
        value.pending = false;
        value.inProgress = false;
      }
    })
    setTask(task);
    localStorage.setItem("wish-list", JSON.stringify(task));
  }

  const pendingWish = ({ id }) => {
    checkedIconRef.current[id].src = checkedIcon;
    pendingIconRef.current[id].src = pendingIconBlack;
    inProgressIconRef.current[id].src = nowIcon;
    task.forEach(value => {
      if (value.id == id) {
        value.done = false;
        value.pending = true;
        value.inProgress = false;
      }
    })
    setTask(task);
    localStorage.setItem("wish-list", JSON.stringify(task));
  }

  const inProgressWish = ({ id }) => {
    checkedIconRef.current[id].src = checkedIcon;
    pendingIconRef.current[id].src = pendingIcon;
    inProgressIconRef.current[id].src = nowIconBlack;
    task.forEach(value => {
      if (value.id == id) {
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

  const handleChangeFormData = (e) => {
    setEditString(e.target.value)
  };

  const editWish = ({ id }) => {
    setEditElement(id)
    setEditText(true)
    inputEditRef.current.value = "";
  }

  const acceptEdit = ({id}) => {
    task.forEach(value => {
      if (value.id == id) {
        value.text = editString;
      }
    })
    setTask(task);
    localStorage.setItem("wish-list", JSON.stringify(task));
    setEditText(false)
  }

  const declineEdit = (element) => {
    setEditText(false)
  }

  return (
    <section className='all-list-section-container'>
      <ul className='wish-list-container'>
        {object.map((element, index) => {
          return (
            <>
              {editText & editElement == element.id
                ?
                <li key={index} data-id={element.id} className='wish-list-elements wish-list-edit'>
                  <input
                  value={editString}
                  name="text"
                  type="text"
                  autoFocus
                  className='edit-input'
                  ref={inputEditRef}
                  onChange={handleChangeFormData}/>
                  <div className='icons-container'>
                    <img className='list-icons thumb-up-icon' src={thumbUpIcon} alt='accept icon' onClick={() => acceptEdit(element)} />
                    <img className='list-icons thumb-down-icon' src={thumbDownIcon} alt='decline icon' onClick={() => declineEdit(element)} />
                  </div>
                </li>
                :
                <li key={index} data-id={element.id} className='wish-list-elements'>
                  <p className='list-render-text' ref={(elementRef) => (textRef.current[element.id] = elementRef)}>{element.text}</p>
                  <div className='icons-container'>
                    <img className='list-icons pending-icon' src={element.pending === false ? pendingIcon : pendingIconBlack} alt='pending icon' ref={(elementRef) => (pendingIconRef.current[element.id] = elementRef)} onClick={() => pendingWish(element)} />
                    <img className='list-icons in-progress-icon' src={element.inProgress === false ? nowIcon : nowIconBlack} alt='in progress icon' ref={(elementRef) => (inProgressIconRef.current[element.id] = elementRef)} onClick={() => inProgressWish(element)} />
                    <img className='list-icons checked-icon' src={element.done === false ? checkedIcon : checkedIconBlack} alt='checked icon' ref={(elementRef) => (checkedIconRef.current[element.id] = elementRef)} onClick={() => completeWish(element)} />
                    <img className='list-icons delete-icon' src={deleteIcon} alt='delete icon' onClick={() => deleteWish(element)} />
                    <img className='list-icons rewrite-icon' src={rewriteIcon} alt='rewrite icon' onClick={() => editWish(element)} />
                  </div>
                </li>
              }
            </>
          )
        })}
      </ul>
    </section>
  )
}