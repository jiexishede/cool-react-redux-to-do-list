import React, {Component, PropTypes} from 'react';
import List from 'material-ui/List';

import Task from './Task';
import style from './style.css';


export default class TaskList extends Component {
  _changeTaskDone(bool, id, props=this.props) {
    const { taskActions } = props;
    const { changeDodeTask } = taskActions;

    changeDodeTask(id, bool);
  }

  _editTask(bool, id, props=this.props) {
    const { taskActions } = props;
    const { editTask } = taskActions;

    editTask(id, bool);
  }

  render() {
    const { taskState } = this.props;
    const { tasks } = taskState;

    return (
      <div className="tasks-list">
        <List>
          {tasks.map((item, id=item.id)=><Task
            changeDone={(done)=>this._changeTaskDone(done, id)}
            changeEditor={(done)=>this._editTask(done, id)}
            task={item}
            key={id}
          />)}
        </List>
      </div>
    );
  }

}


TaskList.PropTypes = {
  taskState:  PropTypes.object.isRequired,

  taskActions: PropTypes.shape({
    changeDodeTask:   PropTypes.func.isRequired,
    editTask:         PropTypes.func.isRequired,
  }),
};