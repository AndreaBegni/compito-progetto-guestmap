import React, { Component } from "react";
import CustomMap from "./Components/CustomMap";
import MessageList from "./Components/MessageList";
import { Container, Row, Col } from "react-bootstrap/";
import { Form } from "react-bootstrap/";
import { Button } from "react-bootstrap/";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        { content: "messaggio numero 1", lat: "45.54", lon: "10.21" },
        { content: "messaggio numero 2", lat: "30.54", lon: "15.21" },
        { content: "messaggio numero 3", lat: "20.54", lon: "25.21" }
      ]
    };

    this.inputField = React.createRef();
  }

  sendMessage = () => {
    let url = "http://localhost:8080/guestmap/messages";
    let data = {
      content: this.inputField.current.value,
      lat: Math.random() * (50 - -50) - 50,
      lon: Math.random() * (50 - -50) - 50
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
