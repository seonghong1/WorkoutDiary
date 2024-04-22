import { useAtom } from "jotai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";

import { UtilService } from "services/util-service";
import { ApiService } from "services/api-service";
import { workoutListAtom } from "store";

import WorkoutInputItems from "../WorkoutInputItems";
import styles from "./WorkoutEventItem.module.scss";

import { IEvent, IEventResource } from "types";

export interface IWorkoutEventItemProps {
  data: IEvent;
  eventIndex: number;
}

function WorkoutEventItem({ data, eventIndex }: IWorkoutEventItemProps) {
  const [workoutList, setWorkoutList] = useAtom(workoutListAtom);

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: UtilService.getColorStyle(data.title) }}
    >
      <div className={styles.titleContainer}>
        <div className={styles.title}>{data.title}</div>
        <ul className={styles.resourceHeader}>
          <li>무게</li>
          <li>횟수</li>
          <li>세트수</li>
        </ul>
        <button
          className={styles.removeButton}
          onClick={() => {
            ApiService.deleteEvent(workoutList, setWorkoutList, eventIndex);
          }}
        >
          <IoIosCloseCircleOutline />
        </button>
      </div>
      {data.resource?.map((item: IEventResource, i: number) => {
        return (
          <WorkoutInputItems
            key={`${item.category}_${i}`}
            data={item}
            eventIndex={eventIndex}
            resourceIndex={i}
          />
        );
      })}
      <button
        className={styles.addButton}
        onClick={() => {
          ApiService.createInputItems(workoutList, setWorkoutList, eventIndex);
        }}
      >
        <IoIosAddCircleOutline />
      </button>
    </div>
  );
}

export default WorkoutEventItem;
