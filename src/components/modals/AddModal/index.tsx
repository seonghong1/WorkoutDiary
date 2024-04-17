import { useAtom } from "jotai";
import { IoAddCircleOutline } from "react-icons/io5";
import { useDetectClickOutside } from "react-detect-click-outside";

import { workoutListAtom } from "store";

import { TITLE_LIST } from "constants/inputs";
import styles from "./AddModal.module.scss";
import { IEvent } from "types";
import { useRef } from "react";
import { ApiService } from "services/api-service";

interface IAddModalProps {
  currentDate: Date;
  changeModalState: (state: "addModal") => void;
}

export function AddModal({ currentDate, changeModalState }: IAddModalProps) {
  const [workoutList, setWorkoutList] = useAtom(workoutListAtom);
  const selectBoxRef = useRef(null as null | HTMLSelectElement);

  const ref = useDetectClickOutside({
    onTriggered: (e: any) => {
      const targetClass = e.srcElement.classList.value;

      if (targetClass) {
        changeModalState("addModal");
      }
    },
  });

  const filteredOptions = TITLE_LIST.filter((option) => {
    const isTrue = workoutList?.some((item: IEvent) => item.title === option);
    if (!isTrue) {
      return option;
    }
  });

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
            ApiService.createEvent(selectBoxRef, currentDate, workoutList, setWorkoutList);
          }}
        >
          <IoAddCircleOutline />
        </button>
      </div>
    </div>
  );
}
