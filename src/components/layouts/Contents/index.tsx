import { useAtom } from "jotai";
import { workoutListAtom } from "store";
import styles from "./Contents.module.scss";
import { CalendarComponent, WorkoutForm } from "components/ui";

export function ContentComponent() {
  const [workoutList] = useAtom(workoutListAtom);

  return (
    <div className={styles.container}>
      <CalendarComponent />
      {workoutList && <WorkoutForm />}
    </div>
  );
}
