import { IoAddCircle, IoToday } from "react-icons/io5";
import { HiMiniMinusCircle } from "react-icons/hi2";

import { useAtom } from "jotai";

import { eventListAtom, workoutListAtom } from "store";

import WorkoutInputBox from "../WorkoutInputBox";
import { AddModal } from "components/modals";

import styles from "./WorkoutForm.module.scss";

import { IEvent } from "types";
import { UtilService } from "services/util-service";
import { useState } from "react";
import { ApiService } from "services/api-service";
import { useDetectClickOutside } from "react-detect-click-outside";

interface IWorkoutFormProps {
  currentDate: Date;
  setCurrentDate: (currentDate: Date | null) => void;
}

function WorkoutForm({ currentDate, setCurrentDate }: IWorkoutFormProps) {
  const [workoutList] = useAtom(workoutListAtom);
  const [eventList, setEventList] = useAtom(eventListAtom);
  const [modalState, setModalState] = useState({ addModal: false });

  const ref = useDetectClickOutside({
    onTriggered: (e: any) => {
      const targetClass: string = e.srcElement.classList.value;
      const availableClassList = ["Contents", "Header_title", "Header_container"];
      for (let i = 0; availableClassList.length > i; i++) {
        if (targetClass.includes(availableClassList[i])) {
          setCurrentDate(null);
          return;
        }
      }
    },
  });

  function changeModalState(state: "addModal") {
    const changedModalState = { [state]: !modalState[state] };
    setModalState({ ...modalState, ...changedModalState });
  }

  return (
    <div ref={ref} className={`${styles.container} ${workoutList ? styles.expand : styles.fold}`}>
      <div className={styles.headerContent}>
        <IoToday className={styles.dateIcon} />
        <span className={styles.date}>{UtilService.getConvertedWorkoutFormDate(currentDate)}</span>
        <button
          className={styles.addButton}
          onClick={() => {
            changeModalState("addModal");
          }}
        >
          {modalState.addModal ? <HiMiniMinusCircle /> : <IoAddCircle />}
        </button>
        {modalState.addModal && (
          <AddModal currentDate={currentDate} changeModalState={changeModalState} />
        )}
      </div>
      <div className={styles.boxContainer}>
        {workoutList?.map((item: IEvent, i: number) => {
          return <WorkoutInputBox key={`${item.title}`} data={item} eventIndex={i} />;
        })}
      </div>
      <button
        className={styles.saveButton}
        onClick={() => {
          ApiService.insertEvents(eventList, setEventList, workoutList, currentDate);
        }}
      >
        저장
      </button>
    </div>
  );
}

export default WorkoutForm;
