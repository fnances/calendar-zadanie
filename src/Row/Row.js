import React, { Component } from 'react';
import{ Event } from "../Event";
import { Cell } from "../Cell";


class Row extends Component {
  renderCells (props) {
    const { days, events, row, cellOnDrop } = props;
    let i = 1;
    let cells = [];

    while (i <= days) {
      let id = `${row}${i}`
      cells.push(<Cell key={i} cellOnDrop={cellOnDrop} cellId={id} event={events[id] || null}/>)
      i++;
    }
    return cells;
  }
  render() {
    return (
        <tr>
         <td>{this.props.hour}</td>
         {this.renderCells(this.props)}

        </tr>
    );
  }
}

export default Row;
