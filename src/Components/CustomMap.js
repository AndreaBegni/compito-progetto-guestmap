import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

export default class CustomMap extends Component {

  //returns one marker component
  createMarker = (message) => {
    let position = [message.lat, message.lon];
    console.log(position)
    return (
      <Marker position={position}>
        <Popup>
          {message.content}
        </Popup>
      </Marker>
    );
  };

  //return the list of every marker
  markerList = () => {
    return this.props.messages.map(this.createMarker);
  };

  render() {
    return (
      <Map center={[45.54, 10.21]} zoom={5}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {this.markerList()}
      </Map>
    );
  }
}
