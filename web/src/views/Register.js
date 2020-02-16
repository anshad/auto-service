import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  Row,
  Alert
} from 'reactstrap'

class Register extends Component {
  constructor (props) {
    super(props)

    this.options = ['India', 'Qatar', 'Kuwait']

    this.state = {
      errors: [],
      success: '',
      country: '',
      name: '',
      email: '',
      province: '',
      city: '',
      street: '',
      building: '',
      phonePrimary: '',
      phoneAlternate: '',
      openingTime: '',
      closingTime: '',
      password: '',
      confirmPassword: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        country: this.state.country,
        name: this.state.name,
        email: this.state.email,
        province: this.state.province,
        city: this.state.city,
        street: this.state.street,
        building: this.state.building,
        phonePrimary: this.state.phonePrimary,
        phoneAlternate: this.state.phoneAlternate,
        openingTime: this.state.openingTime,
        closingTime: this.state.closingTime,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword
      })
    }
    fetch(process.env.REACT_APP_API_URI + 'sellers/register', options)
      .then(response => {
        if (!response.ok) {
          return Promise.reject(response)
        }
        return response.json()
      })
      .catch(async response => {
        const error = await response.json().then(text => text)
        return Promise.reject(error)
      })
      .then(result => {
        this.clearForm()
        this.setState({ success: result.success[0].message })
      })
      .catch(err => {
        this.setState({ success: '' })
        this.setState({ errors: err.errors })
      })
  }

  clearForm () {
    this.setState({
      country: '',
      name: '',
      email: '',
      province: '',
      city: '',
      street: '',
      building: '',
      phonePrimary: '',
      phoneAlternate: '',
      openingTime: '',
      closingTime: '',
      password: '',
      confirmPassword: ''
    })
  }

  render () {
    const countriesList =
      this.options.length > 0 &&
      this.options.map((item, i) => {
        return (
          <option key={i} value={item}>
            {item}
          </option>
        )
      }, this)

    const errors = this.state.errors.map((item, i) => {
      return (
        <Alert
          color="danger"
          key={i}
          toggle={() => {
            const errors = [...this.state.errors]
            errors.splice(i, 1)
            this.setState({ errors })
          }}>
          {item.msg ? item.msg : item.message}
        </Alert>
      )
    }, this)

    return (
      <div className="app flex-row align-items-center page-container">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-9">
                <CardBody className="p-4">
                  <Form onSubmit={this.handleSubmit}>
                    <h1>Register</h1>
                    <p className="text-muted">
                      Create your service provider account
                    </p>
                    {errors}
                    {this.state.success !== '' ? (
                      <Alert
                        color="success"
                        toggle={() => {
                          //
                        }}>
                        {this.state.success}. Click
                        <Link to="/login"> here</Link> to login.
                      </Alert>
                    ) : (
                      ''
                    )}
                    {/* name */}
                    <InputGroup className="mb-3">
                      <Input
                        type="text"
                        placeholder="Service provider name"
                        value={this.state.name}
                        required
                        onChange={el => {
                          this.setState({
                            name: el.currentTarget.value
                          })
                        }}
                      />
                    </InputGroup>
                    {/* email */}
                    <InputGroup className="mb-3">
                      <Input
                        type="text"
                        required
                        placeholder="Email"
                        autoComplete="email"
                        value={this.state.email}
                        onChange={el => {
                          this.setState({
                            email: el.currentTarget.value
                          })
                        }}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input
                        type="password"
                        placeholder="Password"
                        required
                        autoComplete="new-password"
                        value={this.state.password}
                        onChange={el => {
                          this.setState({ password: el.currentTarget.value })
                        }}
                      />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <Input
                        type="password"
                        placeholder="Repeat password"
                        required
                        autoComplete="new-password"
                        value={this.state.confirmPassword}
                        onChange={el => {
                          this.setState({
                            confirmPassword: el.currentTarget.value
                          })
                        }}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input
                        type="select"
                        required
                        value={this.state.country}
                        onChange={el => {
                          this.setState({ country: el.currentTarget.value })
                        }}>
                        <option>Select country</option>
                        {countriesList}
                      </Input>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input
                        type="text"
                        required
                        placeholder="State or province"
                        value={this.state.province}
                        onChange={el => {
                          this.setState({ province: el.currentTarget.value })
                        }}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input
                        type="text"
                        required
                        placeholder="City"
                        value={this.state.city}
                        onChange={el => {
                          this.setState({ city: el.currentTarget.value })
                        }}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input
                        type="text"
                        required
                        placeholder="Street"
                        value={this.state.street}
                        onChange={el => {
                          this.setState({ street: el.currentTarget.value })
                        }}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input
                        type="text"
                        placeholder="Building name or number, floor"
                        value={this.state.building}
                        onChange={el => {
                          this.setState({
                            building: el.currentTarget.value
                          })
                        }}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input
                        type="text"
                        required
                        placeholder="Primary phone number"
                        value={this.state.phonePrimary}
                        onChange={el => {
                          this.setState({
                            phonePrimary: el.currentTarget.value
                          })
                        }}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input
                        type="text"
                        placeholder="Alternate phone number"
                        value={this.state.phoneAlternate}
                        onChange={el => {
                          this.setState({
                            phoneAlternate: el.currentTarget.value
                          })
                        }}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input
                        type="text"
                        required
                        id="opening-time"
                        placeholder="Opening Time"
                        value={this.state.openingTime}
                        onChange={el => {
                          this.setState({
                            openingTime: el.currentTarget.value
                          })
                        }}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input
                        type="text"
                        required
                        id="closing-time"
                        placeholder="Closing Time"
                        value={this.state.closingTime}
                        onChange={el => {
                          this.setState({
                            closingTime: el.currentTarget.value
                          })
                        }}
                      />
                    </InputGroup>
                    <Button type="submit" color="success" block>
                      Create Account
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Register
