import { useAtom } from "jotai";
import { workoutListAtom } from "store";
import styles from "./Contents.module.scss";
import { CalendarComponent, WorkoutForm } from "components/ui";
import { useState } from "react";

export function ContentComponent() {
  const [workoutList] = useAtom(workoutListAtom);

  const [_currentDate, _setCurrentDate] = useState(null as null | Date);

  function setCurrentDate(currentDate: Date) {
    _setCurrentDate(currentDate);
  }

  return (
    <div className={styles.container}>
      <CalendarComponent setCurrentDate={setCurrentDate} currentDate={_currentDate} />
      {workoutList && _currentDate && <WorkoutForm currentDate={_currentDate} />}
    </div>
  );
}
