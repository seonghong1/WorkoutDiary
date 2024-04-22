import { useRef } from "react";
import { useAtom } from "jotai";
import { useDetectClickOutside } from "react-detect-click-outside";
import { FaChevronDown } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";

import { workoutListAtom } from "store";
import { ApiService } from "services/api-service";

import styles from "./AddModal.module.scss";

import { IEvent, TCategory } from "types";
import { TITLE_LIST } from "constants/inputs";

interface IAddModalProps {
  currentDate: Date;
  changeModalState: (state: "addModal") => void;
}

function AddModal({ currentDate, changeModalState }: IAddModalProps) {
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

  const filteredOptions = TITLE_LIST.filter((option: TCategory) => {
    const isTrue = workoutList?.some((item: IEvent) => item.title === option);
    if (!isTrue) {
      return option;
    } else return null;
  });

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.selectContainer}>
        <select ref={selectBoxRef} name="" id="">
          {filteredOptions.map((data) => {
            return (
              <option key={data} value={data}>
                {data}
              </option>
            );
          })}
        </select>
        <FaChevronDown className={styles.arrowIcon} />
      </div>
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

export default AddModal;
