import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import { LabelCheckbox } from 'material-ui/Checkbox';
import { FormGroup } from 'material-ui/Form';

import { trimSpaceKey } from '../../api/functions';

import style from './style.css';


export default class Filter extends Component {

  _onChangeCheckbox(event, props=this.props) {
    const { filterActions } = props;
    const { changeShowDone } = filterActions;
    const { target } = event;
    const { checked } = target;

    changeShowDone(checked);
  }

  _onChangeFind(event, props=this.props) {
    const { filterActions } = props;
    const { addFilterText } = filterActions;
    const { target } = event;
    const { value } = target;

    let filterValue = typeof trimSpaceKey === 'function' ? trimSpaceKey(value) : value;

    addFilterText(filterValue);
  }

  render() {
    const { filterState } = this.props;
    const { filterText, showDone } = filterState;

    return (
      <FormGroup row>
        <LabelCheckbox
          labelClassName={style.labelClassName}
          checked={showDone}
          onChange={(event)=>this._onChangeCheckbox(event)}
          label="Show done"
          value="showDone"
        />
        <TextField
          labelClassName={style.inputLabel}
          inputClassName={style.input}
          defaultValue={filterText}
          label="Поиск задач"
          onChange={(event)=>this._onChangeFind(event)} />
      </FormGroup>
    );
  }

}


Filter.PropTypes = {
  filterState:    PropTypes.shape({
    filterText: PropTypes.string.isRequired,
    showDone: PropTypes.bool.isRequired
  }),

  filterActions: PropTypes.shape({
    addFilterText:   PropTypes.func.isRequired,
    changeShowDone: PropTypes.func.isRequired,
  }),
};