import React, { Component } from "react";
import { Card } from "react-bootstrap";

var scrollableDivStyle = {
  height: 400,
  overflowY: "auto",
  margin: "0 auto",
  background: "#ededed"
};

export default class MessageList extends Component {
  createMessageCard = message => {
    return (
      <Card>
        <Card.Body>
          <Card.Text>{message.content}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  render() {
    return (
      <div style={scrollableDivStyle} ref="scrollableDiv">
        {this.props.messages.map(this.createMessageCard)}
      </div>
    );
  }
}
