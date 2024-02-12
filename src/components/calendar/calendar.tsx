import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import trLocale from '@fullcalendar/core/locales/tr';
import { DateSelectArg } from '@fullcalendar/core/index.js';
import { useEffect, useState } from 'react';

const Calendar = () => {
  const [events, setEvents] = useState<any>([
    { title: 'Meeting', start: new Date() },
  ]);

  function handleDateSelect(selectInfo: DateSelectArg) {
    let title = prompt('Please enter a new title for your event');
    if (!title) return;
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();
    setEvents([...events, { title: title, start: selectInfo.startStr }]);
  }

  useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <FullCalendar
      locales={[trLocale]}
      locale="tr"
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      }}
      initialView="dayGridMonth"
      editable={true}
      selectable={true}
      selectMirror={true}
      weekends={true}
      events={events}
      select={(arg) => handleDateSelect(arg)} 
      eventContent={renderEventContent}
      eventClick={(arg) => console.log(arg)} 
      eventsSet={(arg) => console.log(arg)}
    />
  );
};

function renderEventContent(eventInfo: any) {
  return (
    <>
      <div>
        <span>{eventInfo.timeText}</span>
        <i>{eventInfo.event.title}</i>
      </div>
    </>
  );
}

export default Calendar;
