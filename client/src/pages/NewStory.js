import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Dropdown from "../components/Dropdown";
import MenuItem from "../components/MenuItem";
import API from "../utils/API";
import { Redirect } from 'react-router-dom'
import { Input, TextArea, FormBtn } from "../components/Form";
import axios from "axios";

class NewStory extends Component {
  state = {
    story: {},
    title: "",
    genre: "",
    setting: "",
    user: {},
    redirect: false
  };

  componentDidMount() {
    this.userInfo();
    // this.tester();
  };

  userInfo = () => {
    axios.get('/user/').then(response => {
      console.log(response.data)
      if (response.data.user) {
        this.setState({
          user: response.data.user
        })
      }
    })
  }

  // userInfo () {
  //  return axios.get('/user/');
  // };

  tester () {
    console.log(this.state.user);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleChange = (event) => {
    this.setState({ genre: event.target.value })
    console.log(event.target.value);
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log({
      user: this.state.user._id,
      title: this.state.title,
      genre: this.state.genre,
      setting: this.state.setting
    });

    API.saveStory({
      user: this.state.user._id,
      title: this.state.title,
      genre: this.state.genre,
      setting: this.state.setting
    })
      .then(this.setState({ redirect: true }))
      // .then(console.log(this.state))
      .catch(err => console.log(err));
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/AllInProgress" />
    }
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Create a new story!</h1>
            </Jumbotron>
            <form>
              <MenuItem value={this.state.genre} onChange={this.handleChange} />
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <TextArea
                value={this.state.setting}
                onChange={this.handleInputChange}
                name="setting"
                placeholder="Start your story here (required)"
              />
              {this.renderRedirect()}
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Submit Story
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NewStory;
