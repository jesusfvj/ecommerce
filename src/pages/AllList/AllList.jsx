import { useContext } from 'react';
import { TaskContext } from '../../pages';
import './AllList.css';

export const AllList = () => {
  const { task, setTask } = useContext(TaskContext);

  return (
    <section className='all-list-section-container'>
        task.maps(()=>{
          
        })
    </section>
  )
}
