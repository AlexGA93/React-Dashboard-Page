import React from "react";

// using schedule instead a simple calendar
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";

// data
import { scheduleData } from "../data/dummy";

// header
import { Header } from "../components";

const Calendar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 dark:bg-secondary-dark-bg bg-white rounded-3xl">
      {/* Header */}
      <Header category="App" title="Calendar" />
      {/* Schedule as Calendar */}
      <ScheduleComponent
        // dimensions
        height="650px"
        // data
        eventSettings={{ dataSource: scheduleData }}
        // starter date
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject
          services={[Day, Week, Month, Agenda, WorkWeek, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
