import { useAtom } from "jotai";

import { workoutListAtom } from "store";

import { TITLE_LIST } from "constants/inputs";
import styles from "./AddModal.module.scss";
import { IEvent, TCategory } from "types";
import { useRef } from "react";

export function AddModal({ currentDate }: { currentDate: Date }) {
  const selectBoxRef = useRef(null as null | HTMLSelectElement);

  const [workoutList, setWorkoutList] = useAtom(workoutListAtom);
  const filteredOptions = TITLE_LIST.filter((option) => {
    const isTrue = workoutList?.some((item: IEvent) => item.title === option);
    if (!isTrue) {
      return option;
    }
  });

  function addWorkoutBox() {
    const data: IEvent[] = [
      {
        title: selectBoxRef.current!.value as TCategory,
        start: currentDate,
        end: currentDate,
        resource: [],
      },
    ];
    if (workoutList) {
      setWorkoutList([...workoutList, ...data]);
    }
  }

  return (
    <div className={styles.container}>
      <select ref={selectBoxRef} name="" id="">
        {filteredOptions.map((data) => {
          return (
            <option key={data} value={data}>
              {data}
            </option>
          );
        })}
      </select>
      <div className="buttons">
        <button
          onClick={() => {
            addWorkoutBox();
          }}
        >
          add
        </button>
      </div>
    </div>
  );
}
