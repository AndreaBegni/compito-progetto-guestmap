import React, { Component } from "react";
import CustomMap from "./Components/CustomMap";
import MessageList from "./Components/MessageList";
import { Container, Row, Col } from "react-bootstrap/";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [{content:"contenuto", lat:"45.54", lon:"10.21"}]
    };

  }

  render() {
    return (
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
    );
  }
}
