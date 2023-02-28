import { useContext } from 'react';
import { ListRender } from '../ListRender/ListRender.jsx';
import InputContext from '../../context/InputContext.jsx';
import checkedIcon from '../../assets/images/checkedIcon.png';
import './AllList.css';

export const AllList = () => {
  const { task, setTask } = useContext(InputContext);

  const completeWish = (e) => {
    e.target.src = checkedIcon;
    const idElement = e.target.parentNode.parentNode.dataset.id;
    const taskFind = task.find(value => value.id === idElement).done = true;
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
   <ListRender object={task} completeWish={completeWish} deleteWish={deleteWish}/>
  )
}
