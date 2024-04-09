import { Calendar, Event, NavigateAction, View, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useAtom } from "jotai";
import { workoutListAtom } from "store";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styles from "./Calendar.module.scss";
import { UtilService } from "services/util-service";

moment.locale("ko-KR");
const localizer = momentLocalizer(moment); // or globalizeLocalizer

function CalendarComponent() {
  const [workoutList, setWorkoutList] = useAtom(workoutListAtom);

  /* 이벤트를 클릭했을 때  */
  function onSelectEvent(event: any) {
    setWorkoutList([event]);
    console.log(event);
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
    // action 인자로 어떤 타입의 navigate action이 일어났는지 확인 가능
    // events.push({
    //   title: "test222",
    //   start: new Date("2024-05-09"),
    //   end: new Date("2024-05-09"),
    //   resource: ["test"],
    // });
    const filterdEvents = events.filter((event: Event) => {
      if (event.start?.toDateString() === UtilService.getConvertedDate(newDate).toDateString()) {
        return event;
      }
    });
    console.log(filterdEvents);

    setWorkoutList(filterdEvents);
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
        events={events}
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
