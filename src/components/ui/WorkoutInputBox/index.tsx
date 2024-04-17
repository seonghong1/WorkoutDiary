import { UtilService } from "services/util-service";
import WorkoutInputItems from "../WorkoutInputItems";
import styles from "./WorkoutInputBox.module.scss";
import { IEvent, IEventResource } from "types";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { ApiService } from "services/api-service";
import { useAtom } from "jotai";
import { workoutListAtom } from "store";

export interface IWorkoutInputBoxProps {
  data: IEvent;
  eventIndex: number;
}

function WorkoutInputBox({ data, eventIndex }: IWorkoutInputBoxProps) {
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

export default WorkoutInputBox;
