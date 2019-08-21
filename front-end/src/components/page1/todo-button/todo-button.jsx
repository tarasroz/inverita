import React from 'react';
import PropTypes from 'prop-types';

const ToDoButton = ({text, onClick}) => (
  <button style={{background: "black", color:"yellowgreen",  cursor: "pointer"}} onClick={onClick}>{text}</button>
);

ToDoButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

ToDoButton.defaultProps = {
  text: 'button',
  onClick: () => {},
}

export default ToDoButton
