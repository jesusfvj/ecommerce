import React from 'react';
import { useContext, useState, useRef, useEffect } from 'react';
import thumbUpIcon from '../../assets/images/thumbUpIcon.png';
import thumbDownIcon from '../../assets/images/thumbDownIcon.png';
import InputContext from '../../context/InputContext.jsx';

export const EditInput = ({ element, onRef}) => {
    const { task, setTask, setEditText  } = useContext(InputContext);
    const inputEditRef = useRef(null);
    const [editString, setEditString] = useState("");
    const handleChangeFormData = (e) => {
        setEditString(e.target.value)
    };

    const acceptEdit = ({ id }) => {
        if(editString !== ""){
            task.forEach(value => {
                if (value.id == id) {
                    value.text = editString;
                }
            })
            setTask(task);
            localStorage.setItem("wish-list", JSON.stringify(task));
        }
            setEditText(false)
    }

    const declineEdit = () => {
        setEditText(false)
    }

    useEffect(() => {
        onRef(inputEditRef);
      }, []);

    return (
        <li className='wish-list-elements wish-list-edit'>
            <input
                value={editString}
                name="text"
                type="text"
                autoFocus
                className='edit-input'
                ref={inputEditRef}
                onChange={handleChangeFormData} />
            <div className='icons-container'>
                <img className='list-icons thumb-up-icon' src={thumbUpIcon} alt='accept icon' onClick={() => acceptEdit(element)} />
                <img className='list-icons thumb-down-icon' src={thumbDownIcon} alt='decline icon' onClick={() => declineEdit(element)} />
            </div>
        </li>
    )
}
