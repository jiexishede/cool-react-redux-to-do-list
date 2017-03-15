import React, {Component, PropTypes} from 'react';
import List from 'material-ui/List';

import Task from './Task';
import style from './style.css';


export default class TaskList extends Component {

  render() {
    const { taskState } = this.props;
    const { tasks } = taskState;

    return (
      <div className="tasks-list">
        <List>
          {tasks.map((item)=><Task task={item} key={item.id} />)}
        </List>
      </div>
    );
  }

}


TaskList.PropTypes = {
  taskState:  PropTypes.object.isRequired,

  taskActions: PropTypes.shape({
    changeDodeTask:   PropTypes.func.isRequired,
  }),
};