import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { useSelector } from "react-redux";
import { taskAction } from "../../store/TaskSlice";

export default function MyCalendar() {
  const tasks = useSelector((state) => state.task.tasks);
  const events = tasks.map((task) => {
    return {
      title: task.title,
      date: `${task.year}-${(task.month + 1 + "").padStart(
        2,
        "0"
      )}-${(task.day + "").padStart(2, "0")}`,
    };
  });

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      height={"100%"}
      events={events}
    />
  );
}
