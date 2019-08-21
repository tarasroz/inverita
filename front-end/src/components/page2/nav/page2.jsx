import React, { Component } from 'react';
import '../nav/page2.css';

import UserList from '../../../containers/user-list/user-list';


class Page2 extends Component {
  render() {
    return (
      <div className="page2">
        <div>
          <h1>Get All:</h1>
        </div>
        <UserList style={{margin:"20px"}}/>
      </div>
    );
  }
};

export default Page2;
