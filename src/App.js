import React, { Component } from "react";
import CustomMap from "./Components/CustomMap";
import MessageList from "./Components/MessageList";
import { Container, Row, Col } from "react-bootstrap/";
import { Form } from "react-bootstrap/";
import { Button } from "react-bootstrap/";

const getCoordinates = () => {
  return new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(position => {
      resolve(position.coords);
    });
  });
};

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };

    this.inputField = React.createRef();
  }

  componentDidMount() {
    fetch("http://localhost:8080/guestmap/messages")
      .then(r => r.json())
      .then(r => this.setState({ messages: r.messages }));
  }

  sendMessage = async () => {
    let { latitude, longitude } = await getCoordinates();
    let url = "http://localhost:8080/guestmap/messages";
    let data = {
      content: this.inputField.current.value,
      lat: latitude,
      lon: longitude
    };
    const HTTPPost = {
      headers: {
        "content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(data),
      method: "POST"
    };
    fetch(url, HTTPPost);
  };

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md={8}>
              <CustomMap messages={this.state.messages}></CustomMap>
            </Col>
            <Col md={4}>
              <MessageList messages={this.state.messages}></MessageList>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={8}>
              <br></br>
              <Form.Group>
                <Form.Control
                  ref={this.inputField}
                  type="text"
                  placeholder="Share a message with the world"
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <br></br>
              <Button block="true" onClick={() => this.sendMessage()}>
                Share
              </Button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
