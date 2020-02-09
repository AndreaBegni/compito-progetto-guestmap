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
  }

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
                  type="text"
                  placeholder="Share a message with the world"
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <br></br>
              <Button block="true">Share</Button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
