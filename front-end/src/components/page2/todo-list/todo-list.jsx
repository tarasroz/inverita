import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../todo-item/todo-item';

import './todo-list.css';

const ToDoList = ({ tasksList}) => (
  <ul className="todo-list">
    {tasksList.map(({ name }) => (
    <ToDoItem key={Math.random()} text={name} />
    ))}

    {/* ============================ */}
    {/* if uncomented three lines under, could use LocalStorage */}
    {/* {tasksList.map(({ text }) => ( */}
      {/* <ToDoItem key={Math.random()} text={text} /> */}
    {/* ))} */}
    {/* ============================ */}
  </ul>
);

ToDoList.propTypes = {
  tasksList: PropTypes.array,
}

ToDoList.defaultProps = {
  tasksList: [],
}

export default ToDoList;
