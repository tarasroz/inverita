import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ToDoList from '../../components/page2/todo-list/todo-list';
import '../user-list/user-list.css';

const domain = 'http://localhost:8081/';


class UserList extends Component {
  state = {
    users: []
  }

  onTasks = (tasks, active) => {
    switch (active) {
      default:
        return tasks;
    }
  }

  componentDidMount() {
    axios.get(`${domain}api/users`)
      .then(
        ({ data }) => {
          this.setState({
            users: data
          })
        },
        err => console.log(err)
      )
  }

  render() {
    const { users } = this.state;

    // ============================
    /* if uncomented three lines under, could use LocalStorage  */
    // const { tasks } = this.props;
    // const isTasksExist = tasks && tasks.length > 0;
    // const isTasks = this.onTasks(tasks);

    return (
      <div className="todo-wrapper">
        {/* {isTasksExist && <ToDoList tasksList={isTasks} />} */}
        {/* ============================ */}

        {users && <ToDoList tasksList={users} />}
      </div>
    );
  }
}

export default connect(({ tasks }) => ({
  tasks,
}))(UserList);