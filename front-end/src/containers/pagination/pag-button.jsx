import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './pag-button.css'

const pages = ['/', '/page2', '/page3'];

class Pagination extends Component {
  getCurrentPath = path => {
    switch (path) {
      case '/':
        return 0;
      case '/page2':
        return 1;
      case '/page3':
        return 2;
      default:
        return 0;
    }
  };

  handleClick = (count) => () => {
    let res;
    if (count === 3) {
      res = 0;
    } else if (count === -1) {
      res = 2;
    } else {
      res = count;
    }

    this.props.history.push(pages[res]);
  };

  render() {
    const { pathname } = this.props.location;
    let currentPage = this.getCurrentPath(pathname);

    return (
      <div className="paginationWrapper">
        <button onClick={this.handleClick(currentPage - 1)}>
          {`<<`}
        </button>
        <button onClick={this.handleClick(currentPage + 1)}>
          {`>>`}
        </button>
      </div>
    );
  }
}

export default withRouter(Pagination);
