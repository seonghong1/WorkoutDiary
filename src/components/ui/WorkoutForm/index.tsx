import { useDetectClickOutside } from "react-detect-click-outside";
import { IoAddCircle, IoToday } from "react-icons/io5";
import { HiMiniMinusCircle } from "react-icons/hi2";

import { useAtom } from "jotai";

import { eventListAtom, workoutListAtom } from "store";

import WorkoutInputBox from "../WorkoutInputBox";
import { AddModal } from "components/modals";

import styles from "./WorkoutForm.module.scss";

import { IEvent, IEventResource, TEventResource } from "types";
import { UtilService } from "services/util-service";
import { useState } from "react";

function WorkoutForm({ currentDate }: { currentDate: Date }) {
  const [workoutList, setWorkoutList] = useAtom(workoutListAtom);
  const [eventList, setEventList] = useAtom(eventListAtom);
  const [modalState, setModalState] = useState({ addModal: false });

  const ref = useDetectClickOutside({
    onTriggered: (e: any) => {
      const classList = ["rbc-event", "rbc-event-content", "rbc-button-link"];
      const targetClass = e.srcElement.classList.value;
      if (!classList.includes(targetClass)) {
        // setWorkoutList(null);
      }
    },
  });

  function changeInputValue(
    eventIndex: number,
    resourceIndex: number,
    data: { key: TEventResource; value: number | string }
  ) {
    const arr: IEvent[] = JSON.parse(JSON.stringify(workoutList));
    arr[eventIndex].resource![resourceIndex][data.key] = data.value;

    setWorkoutList(arr);
  }

  function removeWorkoutBox(eventIndex: number) {
    if (eventIndex === 0) {
      setWorkoutList(workoutList!.slice(1));
    } else {
      setWorkoutList([...workoutList!.slice(0, eventIndex), ...workoutList!.slice(eventIndex + 1)]);
    }
  }

  function addWorkoutInputItems(eventIndex: number) {
    const arr: IEvent[] = JSON.parse(JSON.stringify(workoutList));
    const data = {
      title: arr[eventIndex].title,
      category: "",
      repetition: 0,
      sets: 0,
      weight: 0,
    } as IEventResource;
    arr[eventIndex].resource.push(data);
    setWorkoutList(arr);
  }

  function removeWorkoutInputItems(eventIndex: number, resourceIndex: number) {
    const arr: IEvent[] = JSON.parse(JSON.stringify(workoutList));

    if (resourceIndex === 0) {
      arr[eventIndex].resource = arr![eventIndex].resource.slice(1);
      setWorkoutList(arr);
    } else {
      const resource = [
        ...arr![eventIndex].resource.slice(0, resourceIndex),
        ...arr![eventIndex].resource.slice(resourceIndex + 1),
      ];

      arr[eventIndex].resource = resource;
      setWorkoutList(arr);
    }
  }

  function saveWorkoutForm() {
    const arr = JSON.parse(JSON.stringify(eventList || []));
    const filteredArr = arr.filter((event: IEvent) => {
      if (new Date(event.start!).toDateString() !== currentDate.toDateString()) {
        return event;
      }
    });
    setEventList([...filteredArr, ...workoutList]);
  }
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
          return (
            <WorkoutInputBox
              key={`${item.title}`}
              data={item}
              eventIndex={i}
              changeInputValue={changeInputValue}
              removeWorkoutBox={removeWorkoutBox}
              removeWorkoutInputItems={removeWorkoutInputItems}
              addWorkoutInputItems={addWorkoutInputItems}
            />
          );
        })}
      </div>
      <button
        className={styles.saveButton}
        onClick={() => {
          saveWorkoutForm();
        }}
      >
        저장
      </button>
    </div>
  );
}

export default WorkoutForm;
