import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Filter from '../Filter';
import Header from '../Header';
import TaskList from '../TaskList';
import style from './style.css';

export default class ToDoList extends Component {
  static componentWillMount() {
    injectTapEventPlugin();
  }

  render() {
    const {
      // Filter
      filterState, filterActions,

      // Task
      taskState, taskActions
    } = this.props;

    return (
      <MuiThemeProvider>
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
      </MuiThemeProvider>
    );
  }
}