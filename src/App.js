import React, {useState} from 'react';
import Item from './Item';
import Header from './Header';
import Add from './Add';

import { List, Divider } from '@material-ui/core';


function App(props) {
  const [ tasks, setTask ] = useState([
    { _id: 1, subject: 'Milk', status: 0 },
    { _id: 2, subject: 'Bread', status: 1 },
    { _id: 3, subject: 'Butter', status: 0 },
  ]);

  const add = subject => {
    const id = tasks.length + 1;

    setTask([
      ...tasks, { id, subject, status: 0 }
    ]);
  }

  const remove = id => () => {
    setTask(tasks.filter(task => task._id !== id));
  }

  const clear = () => {
    setTask(tasks.filter(task=> false));
  }

  const toggle = _id => () => {
    setTask(tasks.map(x => {
      if (x._id === _id) {
        x.status = +!x.status;
      }
      return x;
    }))
  }

  return (
    <div>
      <Header
        clear={clear}
        count={tasks.filter(task=>task.status === 0).length}
       />
      <Add add={add} />
      <List>
        {tasks.filter(task => task.status === 0).map(task=>{
          return (
            <Item
              key={task._id}
              task={task}
              remove={remove}
              toggle={toggle}
             />
          );
        })}
      </List>
      <Divider />
      <List>
        {tasks.filter(task => task.status === 1).map(task=>{
          return (
            <Item
              key={task._id}
              task={task}
              remove={remove}
              toggle={toggle}
             />
          );
        })}
      </List>
    </div>
  );
}

export default App;
