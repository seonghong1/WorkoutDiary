import { useAtom } from "jotai";
import { workoutListAtom } from "store";
import styles from "./WorkoutForm.module.scss";
import WorkoutInputBox from "../WorkoutInputBox";
import { IEvent } from "types";

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
      {workoutList?.map((item: IEvent, i: number) => {
        return <WorkoutInputBox key={`${item.title}_${i}`} data={item} />;
      })}
    </div>
  );
}

export default WorkoutForm;
