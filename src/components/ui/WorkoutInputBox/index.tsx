import { IEvent, IEventResource } from "types";
import styles from "./WorkoutInputBox.module.scss";
import WorkoutInputItems from "../WorkoutInputItems";

export interface IAppProps {}

function WorkoutInputBox({
  data,
  eventIndex,
  changeEvent,
}: {
  data: IEvent;
  eventIndex: number;
  changeEvent: any;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{data.title}</div>
      <ul className={styles.resourceHeader}>
        <li>무게</li>
        <li>횟수</li>
        <li>세트수</li>
      </ul>
      {data.resource.map((item: IEventResource, i: any) => {
        return (
          <WorkoutInputItems
            key={item.category}
            data={item}
            eventIndex={eventIndex}
            resourceIndex={i}
            changeEvent={changeEvent}
          />
        );
      })}
    </div>
  );
}

export default WorkoutInputBox;
