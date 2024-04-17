import { useAtom } from "jotai";
import { IoAddCircleOutline } from "react-icons/io5";
import { useDetectClickOutside } from "react-detect-click-outside";

import { workoutListAtom } from "store";

import { TITLE_LIST } from "constants/inputs";
import styles from "./AddModal.module.scss";
import { IEvent, TCategory } from "types";
import { useRef } from "react";

export function AddModal({
  currentDate,
  changeModalState,
}: {
  currentDate: Date;
  changeModalState: (state: "addModal") => void;
}) {
  const selectBoxRef = useRef(null as null | HTMLSelectElement);

  const ref = useDetectClickOutside({
    onTriggered: (e: any) => {
      const targetClass = e.srcElement.classList.value;

      console.log(targetClass);
      if (targetClass) {
        changeModalState("addModal");
      }
    },
  });

  const [workoutList, setWorkoutList] = useAtom(workoutListAtom);
  const filteredOptions = TITLE_LIST.filter((option) => {
    const isTrue = workoutList?.some((item: IEvent) => item.title === option);
    if (!isTrue) {
      return option;
    }
  });

  function addWorkoutBox() {
    if (selectBoxRef.current!.value) {
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
  }

  return (
    <div ref={ref} className={styles.container}>
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
          <IoAddCircleOutline />
        </button>
      </div>
    </div>
  );
}
