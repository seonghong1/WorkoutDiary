import { Calendar, SlotInfo, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useAtom } from "jotai";
import { currentDateAtom } from "../../../store";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styles from "./Calendar.module.scss";

const localizer = momentLocalizer(moment); // or globalizeLocalizer

function CalendarComponent() {
  const [currentDate, setCurrentDate] = useAtom(currentDateAtom);
  console.log(currentDate);
  function onSelectSlot(slotInfo: SlotInfo) {
    slotInfo.action = "click";
    const year = slotInfo.start.getFullYear();
    const month = slotInfo.start.getMonth();
    const date = slotInfo.start.getDate();
    setCurrentDate(`${year}-${month}-${date}`);
  }

  return (
    <div className={`${styles.container} ${currentDate ? styles.fold : styles.expand}`}>
      <Calendar views={["month"]} selectable={true} onSelectSlot={onSelectSlot} localizer={localizer} startAccessor="start" endAccessor="end" />
    </div>
  );
}

export default CalendarComponent;
