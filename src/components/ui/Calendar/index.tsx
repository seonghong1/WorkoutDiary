import { useState, useEffect } from "react";
import { Calendar, NavigateAction, View, momentLocalizer } from "react-big-calendar";
import { useAtom } from "jotai";
import moment from "moment";

import { eventListAtom, workoutListAtom } from "store";
import { UtilService } from "services/util-service";

import styles from "./Calendar.module.scss";
import "react-big-calendar/lib/css/react-big-calendar.css";

import Toolbar from "../Toolbar";

import { IEvent } from "types";

moment.locale("ko-KR");
const localizer = momentLocalizer(moment); // or globalizeLocalizer
function CalendarComponent({
  currentDate,
  setCurrentDate,
}: {
  currentDate: null | Date;
  setCurrentDate: (currentDate: Date) => void;
}) {
  const [workoutList, setWorkoutList] = useAtom(workoutListAtom);
  const [eventList, setEventList] = useAtom(eventListAtom);

  useEffect(() => {
    const date = new Date("2024-04-16");
    setCurrentDate(date);

    const localstorage = JSON.parse(localStorage.getItem("WorkoutDiary") || "{}");
    if (localstorage) {
      setEventList(localstorage[`${date!.getFullYear()}_${date!.getMonth() + 1}`]);
    }
  }, []);

  useEffect(() => {
    if (currentDate && workoutList) {
      const key = `${currentDate!.getFullYear()}_${currentDate!.getMonth() + 1}`;
      const data = { [key]: eventList };

      const localstorage = JSON.parse(localStorage.getItem("WorkoutDiary") || "{}");

      localStorage.setItem("WorkoutDiary", JSON.stringify({ ...localstorage, ...data }));
    }
  }, [eventList]);

  /* 이벤트를 클릭했을 때  */
  function onSelectEvent(event: IEvent) {
    setWorkoutList([event]);
  }

  /* 날짜 이동, 월 이동시 호출되는 항목 */
  function onNavigate(newDate: Date, view: View, action: NavigateAction) {
    setCurrentDate(newDate);

    const filterdData = eventList?.filter((event: IEvent) => {
      if (event) {
        if (new Date(event.start!)?.toDateString() === newDate.toDateString()) {
          return event;
        }
      }
    });

    if (action !== "DATE") {
      if (eventList) {
        const localstorage = JSON.parse(localStorage.getItem("WorkoutDiary") || "{}");
        setEventList(localstorage[`${currentDate!.getFullYear()}_${currentDate!.getMonth() + 1}`]);
      }
    } else {
      setWorkoutList(filterdData || []);
    }
  }

  /* 이벤트 요소들이 마운트, 업데이트 될 때 호출되는 함수 */
  function eventPropGetter(event: any) {
    var style = {
      backgroundColor: UtilService.getColorStyle(event.title),
    };

    return {
      style: style,
    };
  }

  return (
    <div className={`${styles.container} ${workoutList ? styles.fold : styles.expand}`}>
      <Calendar
        events={eventList}
        selectable={true}
        localizer={localizer}
        views={["month"]}
        startAccessor="start"
        endAccessor="end"
        onNavigate={onNavigate}
        onSelectEvent={onSelectEvent}
        eventPropGetter={eventPropGetter}
        components={{ toolbar: Toolbar }}
      />
    </div>
  );
}

export default CalendarComponent;
