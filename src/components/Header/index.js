import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Text';

import style from './style.css';

export default class Header extends Component {
  render() {
    return (
      <div className={style.header}>
        <AppBar className={style.appBar}>
          <Toolbar>
            <Text style={{flex: 1}} type="title" colorInherit>To-Do List</Text>
            {this.props.children}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}