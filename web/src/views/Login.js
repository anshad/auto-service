import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  Alert
} from 'reactstrap'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      errors: [],
      success: '',
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }
    fetch(process.env.REACT_APP_API_URI + 'auth/login', options)
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
        if (result.data.seller) {
          sessionStorage.setItem('token', result.data.token)
          sessionStorage.setItem('seller', JSON.stringify(result.data.seller))
          this.setState({ success: result.success[0].message })
          this.props.history.push('/')
        } else {
          this.setState({
            errors: [{ message: "You don't have a seller account!" }]
          })
        }
      })
      .catch(err => {
        this.setState({ success: '' })
        this.setState({ errors: err.errors })
      })
  }

  render () {
    let errors = ''
    if (typeof this.state.errors !== 'undefined') {
      errors = this.state.errors.map((item, i) => {
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
    }

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.handleSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">
                        Sign In to your service provider account
                      </p>
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
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>@</InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="email"
                          required
                          placeholder="Email"
                          value={this.state.email}
                          onChange={el => {
                            this.setState({ email: el.currentTarget.value })
                          }}
                          autoComplete="email"
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          required
                          value={this.state.password}
                          onChange={el => {
                            this.setState({ password: el.currentTarget.value })
                          }}
                          placeholder="Password"
                          autoComplete="current-password"
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button
                            type="submit"
                            color="primary"
                            className="px-4">
                            Login
                          </Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          {/* <Button color="link" className="px-0">
                            Forgot password?
                          </Button> */}
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card
                  className="text-white bg-primary py-5 d-md-down-none"
                  style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>
                        Auto Service is multitenant platform for providing
                        automobile services.
                      </p>
                      <Link to="/register">
                        <Button
                          color="primary"
                          className="mt-3"
                          active
                          tabIndex={-1}>
                          Register as a service provider now!
                        </Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Login
