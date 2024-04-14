import { Calendar, Event, NavigateAction, View, momentLocalizer } from "react-big-calendar";
import { useAtom } from "jotai";
import moment from "moment";

import { workoutListAtom } from "store";
import { UtilService } from "services/util-service";

import styles from "./Calendar.module.scss";
import "react-big-calendar/lib/css/react-big-calendar.css";

import Toolbar from "../Toolbar";

import { IEvent } from "types";

import { DUMMY_DATA } from "constants/inputs";

moment.locale("ko-KR");
const localizer = momentLocalizer(moment); // or globalizeLocalizer

function CalendarComponent() {
  const [workoutList, setWorkoutList] = useAtom(workoutListAtom);

  /* 이벤트를 클릭했을 때  */
  function onSelectEvent(event: IEvent) {
    setWorkoutList([event]);
  }

  function getEvents(): IEvent[] {
    return DUMMY_DATA["2024_4"];
  }

  /* 날짜 이동, 월 이동시 호출되는 항목 */
  function onNavigate(newDate: Date, view: View, action: NavigateAction) {
    const date = `${newDate.getFullYear()}_${newDate.getMonth() + 1}`;
    const data = DUMMY_DATA[date];
    if (!data) return;
    const filterdData = data.filter((event: IEvent) => {
      if (event.start?.toDateString() === UtilService.getConvertedDate(newDate).toDateString()) {
        return event;
      }
    });

    setWorkoutList(filterdData);
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
        events={getEvents()}
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
