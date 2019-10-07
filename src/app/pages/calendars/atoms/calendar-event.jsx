import React, { Component } from 'react'

class CalendarEvent extends Component {
  render() {
    return (
      <div className={`rbc-event--${this.props.event.title}`}>
        {this.props.event.title}
      </div>
    );
  }
}

export default CalendarEvent;
