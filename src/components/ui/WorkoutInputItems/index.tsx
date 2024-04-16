import { ChangeEvent } from "react";

import styles from "./WorkoutInputItems.module.scss";
import { IEventResource, TEventResource } from "types";
import { CATEGORY_OPTIONS_DATA } from "constants/inputs";

export interface IAppProps {}

function WorkoutInputItems({
  data,
  eventIndex,
  resourceIndex,
  changeInputValue,
  removeWorkoutInputItems,
}: {
  data: IEventResource;
  eventIndex: number;
  resourceIndex: number;
  changeInputValue: (
    eventIndex: number,
    resourceIndex: number,
    data: { key: TEventResource; value: string | number }
  ) => void;
  removeWorkoutInputItems: (eventIndex: number, resourceIndex: number) => void;
}) {
  return (
    <div className={styles.container}>
      <select
        className={styles.category}
        value={data.category}
        name=""
        id=""
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          changeInputValue(eventIndex, resourceIndex, { key: "category", value: e.target.value })
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
              changeInputValue(eventIndex, resourceIndex, { key: "weight", value: e.target.value })
            }
          />
          <span>kg</span>
        </div>
        <div className={styles.inputContainer}>
          <input
            type="number"
            className={styles.repetition}
            value={data.repetition}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              changeInputValue(eventIndex, resourceIndex, {
                key: "repetition",
                value: e.target.value,
              })
            }
          />
          <span>reps</span>
        </div>
        <div className={styles.inputContainer}>
          <input
            type="number"
            className={styles.sets}
            value={data.sets}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              changeInputValue(eventIndex, resourceIndex, { key: "sets", value: e.target.value })
            }
          />
          <span>sets</span>
        </div>
        <button
          onClick={() => {
            removeWorkoutInputItems(eventIndex, resourceIndex);
          }}
        >
          remove
        </button>
      </div>
    </div>
  );
}

export default WorkoutInputItems;
