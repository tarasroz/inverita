import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTast } from '../../actions/actionCreator';
import ToDoInput from '../../components/page1/todo-input/todo-input';
import ToDoButton from '../../components/page1/todo-button/todo-button';
import '../enter-user/enter-user.css';
import axios from 'axios';

const domain = 'http://localhost:8081/';

class EnterUser extends Component {

  state = {
    taskText: '',
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      taskText: value,
    })
  }

  // ============================
  /* if uncomented Foo() under, could use LocalStorage  */
  // addTast = ({ key }) => {
  //   const { taskText } = this.state;

  //   if (taskText.length > 3 && key === 'Enter') {
  //     const { addTast } = this.props;
  //     addTast((new Date()).getTime(), taskText, false);
  //     this.setState({
  //       taskText: '',
  //     });
  //   }
  // }
  // ============================

  handleClick = (e) => {
    const { taskText } = this.state;

    if (taskText.length > 3 && e) {

      e.preventDefault();
      const { addTast } = this.props;
      addTast((new Date()).getTime(), taskText, false);
      this.setState({
        taskText: '',
      });

      axios.post(`${domain}api/user`, { name: taskText })
        .then(
          res => console.log(res),
          err => console.log(err)
        )
    }
  }

  render() {
    const { taskText } = this.state;

    return (
      <div className="todo-wrapper">
        <ToDoInput onKeyPress={this.addTast} onChange={this.handleInputChange} value={taskText} />
        <ToDoButton onClick={this.handleClick} />
      </div>
    );
  }
}

export default connect(() => ({
}), { addTast })(EnterUser);