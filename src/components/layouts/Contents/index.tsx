import { CalendarComponent, WorkoutForm } from "components/ui";
import styles from "./Contents.module.scss";
import { workoutListAtom } from "store";

import { useAtom } from "jotai";

export function ContentComponent() {
  const [workoutList] = useAtom(workoutListAtom);

  return (
    <div className={styles.container}>
      <CalendarComponent />
      {workoutList && <WorkoutForm />}
    </div>
  );
}
