import React, { Component } from 'react'
import _ from 'lodash'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'


import CalendarEvent from '../atoms/calendar-event'


const localizer = momentLocalizer(moment)

class CalendarEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }

  onSelectEmpty = (e) => {
    //todo: Change behavior based on first slot selected
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
      <div className="template template--calendar template--calendar-edit">
      <Calendar
        components={{ event: CalendarEvent}}
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
