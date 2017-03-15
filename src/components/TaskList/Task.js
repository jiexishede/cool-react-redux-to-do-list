import React, {Component, PropTypes} from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import ModeEditIcon from 'material-ui/svg-icons/mode-edit';

// import style from './style.css';

const styleSheet = createStyleSheet('FloatingActionButtons', (theme) => ({
  button: {
    margin: 0,
  },
  item: {
    marginBottom: 15
  }
}));


export default class Task extends Component {

  render() {
    const {props, context} = this;
    const classes = context.styleManager.render(styleSheet);
    const {task, changeDone} = props;
    const {name, done} = task;

    return (
      <ListItem
        dense
        button
        onClick={()=>changeDone(!done)}
        className={classes.item}>
        <Checkbox
          ripple={false}
          checked={done}
        />
        <ListItemText primary={name} />
        <ListItemSecondaryAction>
          <Button
            compact
            fab
            primary
            className={classes.button} ><ModeEditIcon /></Button>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }

}


Task.PropTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    catId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    description: PropTypes.string,
  }),
  changeDone: PropTypes.func
};

Task.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};
