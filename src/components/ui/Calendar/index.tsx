import { useEffect } from "react";
import { Calendar, NavigateAction, SlotInfo, View, momentLocalizer } from "react-big-calendar";
import { useAtom } from "jotai";
import moment from "moment";

import { eventListAtom, workoutListAtom } from "store";
import { UtilService } from "services/util-service";

import styles from "./Calendar.module.scss";
import "react-big-calendar/lib/css/react-big-calendar.css";

import Toolbar from "../Toolbar";

import { IEvent } from "types";
import { ApiService } from "services/api-service";

moment.locale("ko-KR");
const localizer = momentLocalizer(moment); // or globalizeLocalizer

interface ICalendarComponentProps {
  currentDate: null | Date;
  setCurrentDate: (currentDate: Date) => void;
}

function CalendarComponent({ currentDate, setCurrentDate }: ICalendarComponentProps) {
  const [workoutList, setWorkoutList] = useAtom(workoutListAtom);
  const [eventList, setEventList] = useAtom(eventListAtom);

  useEffect(() => {
    ApiService.getEvents(setCurrentDate, setEventList);
  }, []);

  useEffect(() => {
    ApiService.updateEvents(currentDate!, workoutList, eventList);
  }, [eventList]);

  /* 이벤트를 클릭했을 때  */
  function onSelectEvent(event: IEvent) {
    setWorkoutList([event]);
  }

  /* 날짜 이동, 월 이동시 호출되는 항목 */
  function onNavigate(newDate: Date, view: View, action: NavigateAction) {
    if (action === "DATE") {
      ApiService.getTodaysEvents(eventList, setCurrentDate, setWorkoutList, newDate);
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

  function onSelectSlot(slotInfo: SlotInfo) {
    ApiService.getTodaysEvents(eventList, setCurrentDate, setWorkoutList, slotInfo.start);
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
        onSelectSlot={onSelectSlot}
        onSelectEvent={onSelectEvent}
        eventPropGetter={eventPropGetter}
        components={{ toolbar: Toolbar }}
      />
    </div>
  );
}

export default CalendarComponent;
