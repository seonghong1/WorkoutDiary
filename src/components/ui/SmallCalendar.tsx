import { Calendar, SlotInfo, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useAtom } from "jotai";
import { currentDateAtom } from "../../store";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../style/calendar.scss";

const localizer = momentLocalizer(moment); // or globalizeLocalizer

function SmallCalendarComponent() {
  const [currentDate, setCurrentDate] = useAtom(currentDateAtom);
  function onSelectSlot(slotInfo: SlotInfo) {
    slotInfo.action = "click";
    const year = slotInfo.start.getFullYear();
    const month = slotInfo.start.getMonth();
    const date = slotInfo.start.getDate();
    setCurrentDate(`${year}-${month}-${date}`);
  }

  return (
    <div className="myCustomHeight">
      <Calendar views={["month"]} selectable={true} onSelectSlot={onSelectSlot} localizer={localizer} startAccessor="start" endAccessor="end" style={{ height: 300, width: 400 }} />
    </div>
  );
}

export default SmallCalendarComponent;
