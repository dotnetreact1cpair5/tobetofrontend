import React from "react";
import FilterSection from "../components/calendar/FilterSection";
import Calendar from "../components/calendar/calendar";

const handleAddEvent = (newEvent: { title: string; start: Date }) => {
  console.log("Yeni etkinlik:", newEvent);
};

const CalendarPage = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <FilterSection handleAddEvent={handleAddEvent} />
        </div>
        <div className="col-span-3">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
