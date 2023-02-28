import { useContext } from 'react';
import InputContext from '../../context/InputContext.jsx';
import { AllList } from '../AllList/AllList';
import { EmptyList } from '../EmptyList/EmptyList';
import { Aside } from '../Aside/Aside';
import './Body.css';

export const Body = () => {
  const { task } = useContext(InputContext);
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
