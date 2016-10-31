import React, { Component } from 'react';
import { Cell } from "../Cell";
import { Row } from "../Row";
import { mocks, dates, hours } from "../mock";


class Table extends Component {
  constructor () {
    super();
    this.state = {
      events: {
        "01": mocks[0]
      }
    };
    this.cellOnDrop = this.cellOnDrop.bind(this);
  }
  cellOnDrop (cellDropped, event) {
    const { events } = this.state;
    const newState = {
      events: {}
    };
    
    for (let cell in events) {
      if (events[cell] === event) {
        newState.events[cell] = null;
      }
    }
    newState.events[cellDropped] = event;

    this.setState(newState);
  }
  render() {
    return (
      <div className="App">
      <h1>Terminplaner</h1>
        <div className="header">
  				<div className="control">
  					<span className="prev">&lt;</span>
  					<span className="date">6 &mdash; 12. Juli 2015</span>
  					<span className="next">&gt;</span>
  				</div>
  				<span className="month"></span>
  				<span className="slider"></span>
  			</div>

        <table>
          <thead>
            <tr>
              <td>Uhrzeit</td>
              {dates.map((date, i) => <td key={i}>{date}</td>)}
            </tr>
          </thead>
          <tbody>
            {hours.map((hour, i) => {
              return (
              <Row
                key={i}
                days={dates.length}
                row={i}
                hour={hour}
                events={this.state.events}
                cellOnDrop={this.cellOnDrop} />);
            })}

          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
