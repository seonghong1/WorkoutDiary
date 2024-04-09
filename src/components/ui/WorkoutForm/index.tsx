import { useAtom } from "jotai";
import { workoutListAtom } from "store";
import styles from "./WorkoutForm.module.scss";

export interface IAppProps {}

function WorkoutForm(props: IAppProps) {
  const [workoutList, setWorkoutList] = useAtom(workoutListAtom);

  return (
    <div
      onClick={() => {
        console.log("test");
      }}
      className={`${styles.container} ${workoutList ? styles.expand : styles.fold}`}
    >
      {/* {workoutList} */}
      test 테스트
    </div>
  );
}

export default WorkoutForm;
