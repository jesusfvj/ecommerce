import InputContext from '../../context/InputContext.jsx';
import { useContext } from 'react';
import { useLocation } from "react-router-dom";
import { AllList, EmptyList, Aside, PendingList, InProgressList, CompletedList } from '../index.js';
import './Body.css';

export const Body = () => {
  const location = useLocation();
  const { task } = useContext(InputContext);
  return (
    <div className="body-container">
      <div className="main-container">
        <Aside />
        {location.pathname === "/" &&
          ( task.length > 0
            ?<AllList />
            :<EmptyList />
          )
        }
        {location.pathname === "/pending" &&
          <PendingList />
        }
        {location.pathname === "/in-progress" &&
          <InProgressList />
        }
        {location.pathname === "/completed" &&
          <CompletedList />
        }
      </div>
    </div>
  )
}
