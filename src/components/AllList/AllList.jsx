import { useContext } from 'react';
import { ListRender } from '../ListRender/ListRender.jsx';
import InputContext from '../../context/InputContext.jsx';

import './AllList.css';

export const AllList = () => {
  const { task, setTask } = useContext(InputContext);

  return (
   <ListRender object={task}/>
  )
}
