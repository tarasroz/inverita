import React from 'react';
import PropTypes from 'prop-types';

import './todo-item.css';

const ToDoItem = ({ text }) => (
  <li className="todo-item">
    <span>{text}</span>
  </li>
);

ToDoItem.propTypes = {
  text: PropTypes.string,
}

ToDoItem.defaultProps = {
  text: '',
}

export default ToDoItem;
