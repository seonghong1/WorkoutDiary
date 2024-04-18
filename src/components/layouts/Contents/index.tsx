import styles from "./Contents.module.scss";
import { CalendarComponent, WorkoutForm } from "components/ui";
import { useState } from "react";

export function ContentComponent() {
  const [_currentDate, _setCurrentDate] = useState(null as null | Date);

  function setCurrentDate(currentDate: Date | null) {
    _setCurrentDate(currentDate);
  }

  return (
    <div className={styles.container}>
      <CalendarComponent setCurrentDate={setCurrentDate} currentDate={_currentDate} />
      {_currentDate && <WorkoutForm currentDate={_currentDate} setCurrentDate={setCurrentDate} />}
    </div>
  );
}
