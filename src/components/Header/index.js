import React, {Component} from 'react';
import Layout from 'material-ui/Layout';

export default class Header extends Component {
  render() {
    console.log();

    return (
      <Layout container gutter={24}>
          <Layout item sm={6} xs={12}>Logo</Layout>
          <Layout item sm={6} xs={12}>
            {this.props.children}
          </Layout>
      </Layout>
    );
  }
}