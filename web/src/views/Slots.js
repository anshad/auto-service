import React, { Component } from 'react';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import {
  Col,
  Row,
  Form,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  Alert,
  Table
} from 'reactstrap';

class Slots extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      seller: JSON.parse(sessionStorage.getItem('seller')),
      token: sessionStorage.getItem('token'),
      slotTime: null,
      errors: [],
      success: '',
      defaultSlots: []
    };
    this.toggle = this.toggle.bind(this);
    this.saveDefaultSlot = this.saveDefaultSlot.bind(this);
    this.deleteSlot = this.deleteSlot.bind(this);
  }

  toggle() {
    const { modal } = this.state;
    this.setState({
      modal: !modal
    });
  }

  saveDefaultSlot(e) {
    e.preventDefault();
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.state.token}`
      },
      body: JSON.stringify({
        time: this.state.slotTime,
        sellerId: this.state.seller._id
      })
    };
    fetch(process.env.REACT_APP_API_URI + 'slots/default-slots', options)
      .then(response => {
        if (!response.ok) {
          return Promise.reject(response);
        }
        return response.json();
      })
      .catch(async response => {
        const error = await response.json().then(text => text);
        return Promise.reject(error);
      })
      .then(result => {
        this.setState({ errors: [] });
        this.setState({ success: result.success[0].message });
        this.setState({ defaultSlots: result.data });
        this.toggle();
      })
      .catch(err => {
        this.setState({ success: '' });
        this.setState({ errors: err.errors });
        this.toggle();
      });
  }

  deleteSlot(item) {}

  renderSlotList() {
    let slots = '';
    if (typeof this.state.defaultSlots !== 'undefined') {
      slots = this.state.defaultSlots.map((item, i) => {
        return (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{item.time}</td>
            {/* <td className="text-center">
              <a
                className="action"
                heref="javascript:;"
                onClick={() => {
                  this.deleteSlot(item);
                }}>
                <i className="fa fa-trash"></i>
              </a>
            </td> */}
          </tr>
        );
      }, this);
    }

    return slots;
  }

  componentDidMount() {
    let options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.state.token}`
      }
    };
    fetch(
      process.env.REACT_APP_API_URI +
        'slots/default-slots/' +
        this.state.seller._id,
      options
    )
      .then(response => {
        if (!response.ok) {
          return Promise.reject(response);
        }
        return response.json();
      })
      .catch(async response => {
        const error = await response.json().then(text => text);
        return Promise.reject(error);
      })
      .then(result => {
        this.setState({ errors: [] });
        this.setState({ defaultSlots: result.data });

        console.log(this.state.defaultSlots);
      })
      .catch(err => {
        console.log(err);
        this.setState({ success: '' });
        this.setState({ errors: err.errors });
      });
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
              let errors = [...this.state.errors];
              errors.splice(i, 1);
              this.setState({ errors });
            }}>
            {item.msg ? item.msg : item.message}
          </Alert>
        );
      }, this);
    }

    let slots = this.renderSlotList();

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            {errors}
            {this.state.success !== '' ? (
              <Alert
                color="success"
                toggle={() => {
                  this.setState({ success: '' });
                }}>
                {this.state.success}
              </Alert>
            ) : (
              ''
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              color="primary"
              onClick={this.toggle}
              className="pull-right spacing">
              Add default slots
            </Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <Form onSubmit={this.saveDefaultSlot}>
                <ModalHeader toggle={this.toggle}>Default Slots</ModalHeader>
                <ModalBody>
                  <FormGroup>
                    <Label>Slot time</Label>
                    <br />
                    <TimePicker
                      showSecond={false}
                      className="xxx"
                      onChange={value => {
                        this.setState({ slotTime: value.format('h:mm a') });
                      }}
                      format="h:mm a"
                      use12Hours
                      inputReadOnly
                    />
                  </FormGroup>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" type="submit">
                    Save
                  </Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Form>
            </Modal>
          </Col>
        </Row>
        <Row>
          <Col>
            {slots !== '' ? (
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Slot Time</th>
                    {/* <th className="text-center">Action</th> */}
                  </tr>
                </thead>
                <tbody>{slots}</tbody>
              </Table>
            ) : (
              ''
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Slots;
