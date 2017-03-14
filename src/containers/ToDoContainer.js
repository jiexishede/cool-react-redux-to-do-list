import { connect } from 'react-redux';

import ToDoList from '../components/ToDoList';
import {
  addFilterText
} from '../redux/modules/filter';


function mapStateToProps(state) {
  return {
    filter: state.filter
  }
}


function mapDispatchToProps(dispatch) {
  return {
    filterChange: (value) => dispatch(addFilterText(value)),
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);