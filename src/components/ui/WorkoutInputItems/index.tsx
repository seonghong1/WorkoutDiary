import { IEventResource } from "types";
import styles from "./WorkoutInputItems.module.scss";
import { ChangeEvent, useState } from "react";
import { OPTIONS_DATA } from "constants/inputs";

export interface IAppProps {}

function WorkoutInputItems({
  data,
  eventIndex,
  resourceIndex,
  changeEvent,
}: {
  data: IEventResource;
  eventIndex: number;
  resourceIndex: number;
  changeEvent: (
    eventIndex: number,
    resourceIndex: number,
    data: { key: string; value: string | number }
  ) => void;
}) {
  return (
    <div className={styles.container}>
      <select
        className={styles.category}
        value={data.category}
        name=""
        id=""
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          changeEvent(eventIndex, resourceIndex, { key: "category", value: e.target.value })
        }
      >
        {OPTIONS_DATA[data.title].map((option: any) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <div className={styles.subContainer}>
        <input
          type="number"
          className={styles.weight}
          value={data.weight}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            changeEvent(eventIndex, resourceIndex, { key: "weight", value: e.target.value })
          }
        />
        <input
          type="number"
          className={styles.repetition}
          value={data.repetition}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            changeEvent(eventIndex, resourceIndex, { key: "repetition", value: e.target.value })
          }
        />
        <input
          type="number"
          className={styles.sets}
          value={data.sets}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            changeEvent(eventIndex, resourceIndex, { key: "sets", value: e.target.value })
          }
        />
      </div>
    </div>
  );
}

export default WorkoutInputItems;
