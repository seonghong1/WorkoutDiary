import { useDetectClickOutside } from "react-detect-click-outside";
import { useAtom } from "jotai";

import { workoutListAtom } from "store";

import WorkoutInputBox from "../WorkoutInputBox";

import styles from "./WorkoutForm.module.scss";

import { IEvent, TEventResource } from "types";

function WorkoutForm() {
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

  function changeInputValue(
    eventIndex: number,
    resourceIndex: number,
    data: { key: TEventResource; value: number | string }
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
            changeInputValue={changeInputValue}
          />
        );
      })}
    </div>
  );
}

export default WorkoutForm;
