import { UtilService } from "services/util-service";
import WorkoutInputItems from "../WorkoutInputItems";
import styles from "./WorkoutInputBox.module.scss";
import { IEvent, IEventResource, TEventResource } from "types";

export interface IAppProps {}

function WorkoutInputBox({
  data,
  eventIndex,
  changeInputValue,
}: {
  data: IEvent;
  eventIndex: number;
  changeInputValue: (
    eventIndex: number,
    resourceIndex: number,
    data: { key: TEventResource; value: string | number }
  ) => void;
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
      </div>

      {data.resource.map((item: IEventResource, i: number) => {
        return (
          <WorkoutInputItems
            key={item.category}
            data={item}
            eventIndex={eventIndex}
            resourceIndex={i}
            changeInputValue={changeInputValue}
          />
        );
      })}
    </div>
  );
}

export default WorkoutInputBox;
