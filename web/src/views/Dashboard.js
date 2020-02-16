import React, { Component } from 'react';

import { Col, Row, Alert } from 'reactstrap';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seller: JSON.parse(sessionStorage.getItem('seller')),
      token: sessionStorage.getItem('token'),
      errors: [],
      success: ''
    };
  }

  render() {
    let errors = '';
    if (typeof this.state.errors !== 'undefined') {
      errors = this.state.errors.map((item, i) => {
        return (
          <Alert
            color="danger"
            key={i}
            toggle={() => {
              const errors = [...this.state.errors];
              errors.splice(i, 1);
              this.setState({ errors });
            }}>
            {item.msg ? item.msg : item.message}
          </Alert>
        );
      }, this);
    }

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            {errors}
            {this.state.success !== '' ? (
              <Alert
                color="success"
                toggle={() => {
                  //
                }}>
                {this.state.success}
              </Alert>
            ) : (
              ''
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
