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
    const addedEvents = [];
    e.slots.forEach((slot, index) => {
      if(index != e.slots.length - 1) {
        const addedEvent = {};
        addedEvent['start'] = slot;
        addedEvent['end'] = moment(slot).add(30, 'm').toDate();
        addedEvent['title'] = 'available';
        addedEvents.push(addedEvent);
      }
    })
    const combinedEvents = _.uniqWith(this.state.events.concat(addedEvents), _.isEqual);
    this.setState({events: combinedEvents});
  }

  onSelectEvent = (e) => {
    const filteredEvents = _.without(this.state.events, e)
    this.setState({events: filteredEvents});
  }

  render() {
    const today = moment().minute(0);
    const formats = {
      eventTimeRangeFormat: ' '
    }
    return (
      <div className="template template--calendar template--calendar-edit">
        <figure className="calendar__element calendar__element--with-shadow">
          <Calendar
            components={{event: CalendarEvent}}
            defaultView="work_week"
            drilldownView="agenda"
            endAccessor="end"
            events={this.state.events}
            formats={formats}
            localizer={localizer}
            max={today.hour(21).add(28, 'd').toDate()}
            min={today.hour(7).toDate()}
            startAccessor="start"
            selectable={true}
            views={['work_week']}
            timeslots={2}

            onSelectSlot={this.onSelectEmpty}
            onSelectEvent={this.onSelectEvent}
          />
          </figure>
      </div>
    );
  }
}

export default CalendarEdit;
