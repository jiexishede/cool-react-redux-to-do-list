import React, {Component} from 'react';

import Filter from '../Filter';
import Header from '../Header';
import TaskList from '../TaskList';
import style from './style.css';

export default class ToDoList extends Component {
  render() {
    const {
      // Filter
      filterState, filterActions,

      // Task
      taskState, taskActions
    } = this.props;

    return (
      <div className={style.toDoList}>
        <Header>
          <Filter
            filterActions={filterActions}
            filterState={filterState} />
        </Header>
        <TaskList
          taskActions={taskActions}
          taskState={taskState} />
      </div>
    );
  }
}