import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seller: JSON.parse(sessionStorage.getItem('seller'))
    };

    console.log(this.state.seller);
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col></Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
