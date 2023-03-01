import React from 'react'
import { useContext } from 'react';
import { ListRender, EmptyList } from '../index.js';
import InputContext from '../../context/InputContext.jsx';

export const CompletedList = () => {
    const { task } = useContext(InputContext);

    const filteredTasks = task.filter(
        (taskToReturn) => taskToReturn.done === true
    );

  return (
    <>
    {filteredTasks.length == 0
        ?<EmptyList />
        :<ListRender object={filteredTasks}/>
    }
    </>
  )
}