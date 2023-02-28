import React from 'react'
import './ListRender.css';
import deleteIcon from '../../assets/images/deleteIcon.png';
import rewriteIcon from '../../assets/images/rewriteIcon.png';
import circleIcon from '../../assets/images/circleIcon.png';
import checkedIcon from '../../assets/images/checkedIcon.png';

export const ListRender = ({object, completeWish, deleteWish}) => {
  return (
    <section className='all-list-section-container'>
    <ul className='wish-list-container'>
      {object.map((element, index) => {
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
