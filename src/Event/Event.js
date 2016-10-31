import React, { Component } from 'react';

class Event extends Component {
  dragStart (e, event) {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("event", JSON.stringify(event));

  }
  render() {
    const { patient: { salutation, firstname, lastname } } = this.props.event;
    return (
      <div
        onDragEnd={this.dragEnd}
        onDragStart={e => this.dragStart(e, this.props.event)}
        draggable="true"
        className="event">
        <h3>{salutation}, {firstname}, {lastname}</h3>
      </div>
    );
  }
}

export default Event;
