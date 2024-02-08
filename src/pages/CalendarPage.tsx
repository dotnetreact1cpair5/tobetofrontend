import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import trLocale from '@fullcalendar/core/locales/tr';
import { DateSelectArg } from '@fullcalendar/core/index.js';

const Calendar = () => {
  const [events, setEvents] = useState<any>([{ title: 'Meeting', start: new Date() }]);
  const [title, setTitle] = useState('');

  function handleDateSelect(selectInfo: DateSelectArg) {
    const newTitle = prompt('Lütfen etkinliğiniz için yeni bir başlık girin');
    if (newTitle) {
      const newEvent = {
        title: newTitle,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
      };
      setEvents([...events, newEvent]);
    }
  }

  useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <div className="container mt-5">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <div className="bg-gray-100 p-4 rounded-lg">
            <label htmlFor="eventTitle" className="block text-sm font-medium text-gray-700">Yeni Etkinlik Başlığı:</label>
            <input
              type="text"
              id="eventTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={() => {
                const newEvent = {
                  title: title,
                  start: new Date(),
                };
                setEvents([...events, newEvent]);
                setTitle('');
              }}
            >
              Ekle
            </button>
          </div>
        </div>
        <div className="col-span-3">
          <div className="bg-white p-4 rounded-lg">
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
              select={handleDateSelect}
              eventContent={renderEventContent}
              eventClick={(arg) => console.log(arg)}
              eventsSet={(arg) => console.log(arg)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function renderEventContent(eventInfo: any) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

export default Calendar;
