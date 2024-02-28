import React from "react";
import FilterSection from "../components/calendar/FilterSection";
import Calendar from "../components/calendar/calendar";
import { AnimatePresence, motion } from "framer-motion";

const handleAddEvent = (newEvent: { title: string; start: Date }) => {
  console.log("Yeni etkinlik:", newEvent);
};
const transition = {
  duration: 1.5,
};

const slideTransition = {
  initial: { x: "100%" },
  animate: { x: 0 },
};
const CalendarPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={slideTransition}
      transition={transition}
    >
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
    </motion.div>
  );
};

export default CalendarPage;
