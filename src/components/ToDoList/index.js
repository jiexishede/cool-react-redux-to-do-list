import React, {Component} from 'react';

import Filter from '../Filter';
import Header from '../Header';
import style from './style.css';

export default class ToDoList extends Component {
  render() {
    const { filterChange, filter } = this.props;
    const { filterText } = filter;

    return (
      <div className={style.toDoList}>
          <Header>
            <Filter
              filterText={filterText}
              filterChange={filterChange} />
          </Header>
      </div>
    );
  }
}