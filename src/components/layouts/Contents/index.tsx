import { CalendarComponent, WorkoutForm } from "components/ui";
import styles from "./Contents.module.scss";
import { currentDateAtom } from "store";

import { useAtom } from "jotai";

export function ContentComponent() {
  const [currentDate] = useAtom(currentDateAtom);

  return (
    <div className={styles.container}>
      <CalendarComponent />
      {currentDate && <WorkoutForm />}
    </div>
  );
}
