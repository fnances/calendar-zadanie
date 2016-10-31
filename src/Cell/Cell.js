import React, { Component } from 'react';
import{ Event } from "../Event";

class Cell extends Component {
  onDragOver (e) {
    e.preventDefault();

  }
  onDrop (e, props) {
    e.preventDefault();
    const event = JSON.parse(e.dataTransfer.getData("event"));
    props.cellOnDrop(props.cellId, event);
  }
  render() {
    return (
        <td
          onDrop={e => this.onDrop(e, this.props)}
          onDragEnter={this.onDragEnter}
          onDragLeave={this.onDragLeave}
          onDragOver={this.onDragOver}>
          {this.props.event && <Event event={this.props.event}/>}
        </td>
    );
  }
}

export default Cell;
