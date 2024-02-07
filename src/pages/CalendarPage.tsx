import React from "react";

function Calendar() {
  return (
    <main>
      <div className="calendar">
        <div className="row mx-0">
          <div className="leftSide">
            <div className="filter-left equal-box">
              <div className="filter-header mb-2"><span>Eğitim Arama</span></div>
              <input
                type="text"
                id="search-event"
                className="cal-filter-input"
                placeholder="Eğitim arayın..."
              />
                  </div>
          </div>
          <div className="rightSide">
            <div className="calendar-bg equal-box">right</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Calendar;
