import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';

import { trimSpaceKey } from '../../api/functions';


export default class Filter extends Component {

  _onChange(event, props=this.props) {
    const { filterChange } = props;
    const { target/*, keyCode*/ } = event;
    const { value } = target;

    let filterValue = typeof trimSpaceKey === 'function' ? trimSpaceKey(value) : value;

    filterChange(filterValue);
  }

  render() {
    const { filterText } = this.props;

    return (
      <div>
        <TextField
          defaultValue={filterText}
          label="Поиск задач"
          onChange={(event)=>this._onChange(event)} />
      </div>
    );
  }

}


Filter.PropTypes = {
  filterText: PropTypes.string,
  filterChange: PropTypes.func.isRequired
};