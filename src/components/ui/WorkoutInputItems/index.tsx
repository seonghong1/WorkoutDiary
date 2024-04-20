import { ChangeEvent } from "react";
import { IoIosRemoveCircleOutline } from "react-icons/io";

import styles from "./WorkoutInputItems.module.scss";
import { IEventResource } from "types";
import { CATEGORY_OPTIONS_DATA } from "constants/inputs";
import { ApiService } from "services/api-service";
import { useAtom } from "jotai";
import { workoutListAtom, windowSizeAtom } from "store";

export interface IWorkoutInputItemsProps {
  data: IEventResource;
  eventIndex: number;
  resourceIndex: number;
}

function WorkoutInputItems({ data, eventIndex, resourceIndex }: IWorkoutInputItemsProps) {
  const [workoutList, setWorkoutList] = useAtom(workoutListAtom);
  const [windowSize, setWindowSize] = useAtom(windowSizeAtom);

  return (
    <div className={styles.container}>
      <select
        className={styles.category}
        value={data.category}
        name=""
        id=""
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          ApiService.updateInputValue(workoutList, setWorkoutList, eventIndex, resourceIndex, {
            key: "category",
            value: e.target.value,
          })
        }
      >
        {CATEGORY_OPTIONS_DATA[data.title].map((option: string) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <div className={styles.subContainer}>
        <div className={styles.inputContainer}>
          <input
            type="number"
            className={styles.weight}
            value={data.weight}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              ApiService.updateInputValue(workoutList, setWorkoutList, eventIndex, resourceIndex, {
                key: "weight",
                value: e.target.value,
              })
            }
          />
          {windowSize !== "tablet" && <span>kg</span>}
        </div>
        <div className={styles.inputContainer}>
          <input
            type="number"
            className={styles.repetition}
            value={data.repetition}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              ApiService.updateInputValue(workoutList, setWorkoutList, eventIndex, resourceIndex, {
                key: "repetition",
                value: e.target.value,
              })
            }
          />
          {windowSize !== "tablet" && <span>reps</span>}
        </div>
        <div className={styles.inputContainer}>
          <input
            type="number"
            className={styles.sets}
            value={data.sets}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              ApiService.updateInputValue(workoutList, setWorkoutList, eventIndex, resourceIndex, {
                key: "sets",
                value: e.target.value,
              })
            }
          />
          {windowSize !== "tablet" && <span>sets</span>}
        </div>
        <button
          className={styles.removeButton}
          onClick={() => {
            ApiService.deleteInputItems(workoutList, setWorkoutList, eventIndex, resourceIndex);
          }}
        >
          <IoIosRemoveCircleOutline />
        </button>
      </div>
    </div>
  );
}

export default WorkoutInputItems;
