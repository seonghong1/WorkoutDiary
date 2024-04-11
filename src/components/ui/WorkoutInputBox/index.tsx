import { IEvent, IWorkoutData } from "types";
import styles from "./WorkoutInputBox.module.scss";
import WorkoutInputItems from "../WorkoutInputItems";

export interface IAppProps {}

function WorkoutInputBox({ data }: { data: IEvent }) {
  console.log("WorkoutInputBox : ", data);

  function change() {}
  return (
    <div className="containter">
      <div>{data.title}</div>
      {data.resource.map((item: IWorkoutData, i: any) => {
        return <WorkoutInputItems key={item.title} data={item} ind={i} />;
      })}
    </div>
  );
}

export default WorkoutInputBox;
