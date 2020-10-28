import React, { useState } from 'react';
import Task from '../task';
import AddTak from '../addTask';
import { useDispatch } from 'react-redux';

export default function TaskList() {
  const [listOfCanceledTasks, setListOfCanceledTasks] = useState([]);
  const [listOfTasks, setListOfTasks] = useState([
    {
      id: 1,
      task: 'My task',
      description: 'abc',
    },
    {
      id: 2,
      task: 'Your task',
      description: '',
    },
  ]);
  // const dispatch = useDispatch();
  // dispatch({
  //   type: 'Add_task',
  // });
  return (
    <div>
      <h3> Tasks</h3>
      {listOfTasks.map((item, index) => {
        return (
          <Task
            value={item}
            setListOfTasks={setListOfTasks}
            listOfTasks={listOfTasks}
            listOfCanceledTasks={listOfCanceledTasks}
            setListOfCanceledTasks={setListOfCanceledTasks}
          />
        );
      })}
      <AddTak setListOfTasks={setListOfTasks} listOfTasks={listOfTasks} />
      <h3 style={{ marginTop: 200 }}>Cancelled Tasks</h3>
      {listOfCanceledTasks.map((item, index) => {
        return (
          <Task
            isCancelled={true}
            value={item}
            setListOfTasks={setListOfTasks}
            listOfTasks={listOfTasks}
            listOfCanceledTasks={listOfCanceledTasks}
            setListOfCanceledTas={setListOfCanceledTasks}
          />
        );
      })}
    </div>
  );
}
