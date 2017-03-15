import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ToDoList from '../components/ToDoList';

// Actions
import * as filterActions from '../redux/modules/filter';
import * as taskActions from '../redux/modules/task';


// Filter tasks function
const toFilterTask = (params) => {
  const { item, filterText, showDone } = params;
  const { name, done } = item;
  const filterTextBool = filterText===''?true:name.indexOf(filterText)>-1;
  const showDoneBool = showDone?true:done===false;

  return filterTextBool&&showDoneBool;
};


function mapStateToProps(state) { console.log(state);
  const { filter, task } = state;
  const { filterText, showDone } = filter;
  const { tasks } = task;

  return {
    filterState: filter,
    taskState: task.set('tasks', task.get('tasks').filter(item=>toFilterTask({
      item: item.toJS(),
      filterText,
      showDone
    }))).toJS(),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filterActions: bindActionCreators(filterActions, dispatch),
    taskActions: bindActionCreators(taskActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);