import { UtilService } from "services/util-service";
import WorkoutInputItems from "../WorkoutInputItems";
import styles from "./WorkoutInputBox.module.scss";
import { IEvent, IEventResource, TEventResource } from "types";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";

export interface IAppProps {}

function WorkoutInputBox({
  data,
  eventIndex,
  changeInputValue,
  removeWorkoutBox,
  removeWorkoutInputItems,
  addWorkoutInputItems,
}: {
  data: IEvent;
  eventIndex: number;
  changeInputValue: (
    eventIndex: number,
    resourceIndex: number,
    data: { key: TEventResource; value: string | number }
  ) => void;
  removeWorkoutBox: (eventIndex: number) => void;
  removeWorkoutInputItems: (eventIndex: number, resourceIndex: number) => void;
  addWorkoutInputItems: (eventIndex: number) => void;
}) {
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
            removeWorkoutBox(eventIndex);
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
            changeInputValue={changeInputValue}
            removeWorkoutInputItems={removeWorkoutInputItems}
          />
        );
      })}
      <button
        className={styles.addButton}
        onClick={() => {
          addWorkoutInputItems(eventIndex);
        }}
      >
        <IoIosAddCircleOutline />
      </button>
    </div>
  );
}

export default WorkoutInputBox;
