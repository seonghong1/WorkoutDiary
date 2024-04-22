import { UtilService } from "services/util-service";

import styles from "./WorkoutStats.module.scss";

import { IEvent, TCategory } from "types";

export interface IWorkoutStatsProps {
  eventList: IEvent[];
}

function WorkoutStats({ eventList }: IWorkoutStatsProps) {
  const partList: TCategory[] = ["등", "가슴", "하체", "어깨", "이두", "삼두"];
  return (
    <div className={styles.container}>
      <ul>
        {partList.map((item: TCategory) => {
          return (
            <li key={item} style={{ color: UtilService.getColorStyle(item) }}>
              {`${item} : ${
                eventList?.filter((event: IEvent) => event.title === item).length || 0
              } 회`}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default WorkoutStats;
