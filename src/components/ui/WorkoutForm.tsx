import { useAtom } from "jotai";
import { currentDateAtom } from "../../store";

export interface IAppProps {}

function WorkoutForm(props: IAppProps) {
  const [currentDate] = useAtom(currentDateAtom);

  return (
    <div
      onClick={() => {
        console.log("test");
      }}
    >
      {currentDate}
    </div>
  );
}

export default WorkoutForm;
