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
        addedEvent['id'] = moment(slot).second(0).millisecond(0).toISOString();
        addedEvent['start'] = moment(slot).second(0).millisecond(0).toDate();
        addedEvent['end'] = moment(slot).second(0).millisecond(0).add(30, 'm').toDate();
        addedEvent['title'] = 'available';
        addedEvents.push(addedEvent);
      }
    })
    addedEvents.push({
      id: moment().hour(0).minute(0).second(0).millisecond(0).toISOString(),
      start: moment().hour(0).minute(0).second(0).millisecond(0).subtract(30,'d').toDate(),
      end: moment().toDate(),
      title: 'history'
    })
    let combinedEvents = this.state.events.concat(addedEvents);
    console.log(combinedEvents);
    combinedEvents = _.uniqBy(combinedEvents, 'id');
    console.log(combinedEvents);
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
            selectable={true}
            showMultiDayTimes={true}
            startAccessor="start"
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
