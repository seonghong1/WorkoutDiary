import { IWorkoutData } from "types";
import styles from "./WorkoutInputItems.module.scss";

export interface IAppProps {}

function WorkoutInputItems({ data, ind }: { data: IWorkoutData; ind: any }) {
  console.log("WorkoutInputItems : ", data, ind);
  return (
    <div className="container">
      <input type="text" className="" value={data.category} />
      <input type="number" className="" value={data.weight} />
      <input type="number" className="" value={data.repetition} />
      <input type="number" className="" value={data.sets} />
    </div>
  );
}

export default WorkoutInputItems;
