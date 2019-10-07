import React, { Component } from 'react'
import _ from 'lodash'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
const localizer = momentLocalizer(moment)

class CalendarEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }

  onSelectEmpty = (e) => {
    console.log(e.slots);
    const addedEvents = [];
    e.slots.forEach((slot, index) => {
      if(index != e.slots.length - 1) {
        const addedEvent = {};
        addedEvent['start'] = slot;
        addedEvent['end'] = moment(slot).add(30, 'm').toDate();
        addedEvent['title'] = 'Available';
        addedEvents.push(addedEvent);
      }
    })
    const combinedEvents = _.uniqWith(this.state.events.concat(addedEvents), _.isEqual);
    this.setState({events: combinedEvents});
  }

  onSelectEvent = (e) => {
    console.log(e);
    const filteredEvents = _.without(this.state.events, e)
    this.setState({events: filteredEvents});
  }

  render() {
    return (
      <div className="template template--user template--user-new">
      <Calendar
        defaultView="week"
        endAccessor="end"
        events={this.state.events}
        localizer={localizer}
        startAccessor="start"
        selectable={true}
        onSelectSlot={this.onSelectEmpty}
        onSelectEvent={this.onSelectEvent}
      />
      </div>
    );
  }
}

export default CalendarEdit;
