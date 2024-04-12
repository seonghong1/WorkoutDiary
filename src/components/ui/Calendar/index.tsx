import { Calendar, Event, NavigateAction, View, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useAtom } from "jotai";
import { workoutListAtom } from "store";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styles from "./Calendar.module.scss";
import { UtilService } from "services/util-service";
import { DUMMY_DATA } from "constants/inputs";
import { IEvent } from "types";

moment.locale("ko-KR");
const localizer = momentLocalizer(moment); // or globalizeLocalizer

function CalendarComponent() {
  const [workoutList, setWorkoutList] = useAtom(workoutListAtom);

  /* 이벤트를 클릭했을 때  */
  function onSelectEvent(event: any) {
    setWorkoutList([event]);
  }

  function getEvents(): IEvent[] {
    return DUMMY_DATA["2024_4"];
  }

  /* 캘린더에 나타날 이벤트 목록 */
  const events: Event[] = [
    {
      title: "test",
      start: new Date("2024-04-09"),
      end: new Date("2024-04-09"),
      resource: ["test"],
    },
    {
      title: "test",
      start: new Date("2024-04-09"),
      end: new Date("2024-04-09"),
      resource: ["test"],
    },
    {
      title: "test",
      start: new Date("2024-04-09"),
      end: new Date("2024-04-09"),
      resource: ["test"],
    },
    {
      title: "test",
      start: new Date("2024-05-09"),
      end: new Date("2024-05-09"),
      resource: ["test"],
    },
    {
      title: "test",
      start: new Date("2024-05-09"),
      end: new Date("2024-05-09"),
      resource: ["test"],
    },
    {
      title: "test",
      start: new Date("2024-06-09"),
      end: new Date("2024-06-09"),
      resource: ["test"],
    },
  ];

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
    var backgroundColor = "#" + event.hexColor;
    var style = {
      backgroundColor: backgroundColor,
      borderRadius: "0px",
      opacity: 0.8,
      color: "black",
      border: "0px",
      display: "block",
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
        // components={{ toolbar: }}
      />
    </div>
  );
}

export default CalendarComponent;
