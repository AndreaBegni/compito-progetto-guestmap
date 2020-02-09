import React, { Component } from "react";
import CustomMap from "./Components/CustomMap";
import MessageList from "./Components/MessageList";
import { Container, Row, Col } from "react-bootstrap/";

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={8}>
            <CustomMap></CustomMap>
          </Col>
          <Col md={4}>
            <MessageList></MessageList>
          </Col>
        </Row>
      </Container>
    );
  }
}
