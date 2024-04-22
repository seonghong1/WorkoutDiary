import { useState } from "react";

import { CalendarComponent, WorkoutForm } from "components/ui";
import styles from "./Contents.module.scss";

function ContentComponent() {
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

export default ContentComponent;
