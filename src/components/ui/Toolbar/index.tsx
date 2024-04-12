import { useAtom } from "jotai";
import { currentDateAtom } from "../../../store";
import styles from "./WorkoutForm.module.scss";

export interface IAppProps {}

function WorkoutForm(props: IAppProps) {
  const [currentDate] = useAtom(currentDateAtom);

  return (
    <div
      onClick={() => {}}
      className={`${styles.container} ${currentDate ? styles.expand : styles.fold}`}
    >
      {currentDate}
      test 테스트
    </div>
  );
}

export default WorkoutForm;
