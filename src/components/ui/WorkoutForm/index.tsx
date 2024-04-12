import { useAtom } from "jotai";
import { workoutListAtom } from "store";
import styles from "./WorkoutForm.module.scss";
import WorkoutInputBox from "../WorkoutInputBox";
import { IEvent, TEventResource } from "types";
import { useDetectClickOutside } from "react-detect-click-outside";

export interface IAppProps {}

function WorkoutForm(props: IAppProps) {
  const [workoutList, setWorkoutList] = useAtom(workoutListAtom);
  const ref = useDetectClickOutside({
    onTriggered: (e: any) => {
      const classList = ["rbc-event", "rbc-event-content", "rbc-button-link"];
      const targetClass = e.srcElement.classList.value;
      if (!classList.includes(targetClass)) {
        setWorkoutList(null);
      }
    },
  });

  // TODO :: any타입 정리하기
  function changeEvent(
    eventIndex: number,
    resourceIndex: number,
    data: { key: TEventResource; value: any }
  ) {
    const arr: IEvent[] = JSON.parse(JSON.stringify(workoutList));
    arr[eventIndex].resource[resourceIndex][data.key] = data.value;

    setWorkoutList(arr);
  }
  return (
    <div ref={ref} className={`${styles.container} ${workoutList ? styles.expand : styles.fold}`}>
      {workoutList?.map((item: IEvent, i: number) => {
        return (
          <WorkoutInputBox
            key={`${item.title}`}
            data={item}
            eventIndex={i}
            changeEvent={changeEvent}
          />
        );
      })}
    </div>
  );
}

export default WorkoutForm;
