import React, { Component } from "react";
import { Card } from "react-bootstrap";

var scrollableDivStyle = {
  width: 300,
  height: 400,
  overflowY: "auto",
  margin: "0 auto",
  background: "#ededed"
};

export default class MessageList extends Component {
  render() {
    return (
      <div style={scrollableDivStyle} ref="scrollableDiv">
        <Card>
          <Card.Body onClick={() => console.log("ciao")}>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card 's content
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body onClick={() => console.log("ciao")}>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card 's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body onClick={() => console.log("ciao")}>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card 's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body onClick={() => console.log("ciao")}>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card 's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
