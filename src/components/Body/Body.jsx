import { useContext } from 'react';
import { TaskContext } from '../../pages';
import { AllList, EmptyList } from '../../pages';
import { Aside } from '../Aside/Aside';
import './Body.css';

export const Body = () => {
  const { task, setTask } = useContext(TaskContext);
  return (
    <div className="body-container">
      <div className="main-container">
        <Aside />
        { task.length > 0
        ?<AllList />
        :<EmptyList />
      }
      </div>
    </div>
  )
}
