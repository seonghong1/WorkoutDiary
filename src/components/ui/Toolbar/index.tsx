import { ToolbarProps } from "react-big-calendar";

import styles from "./Toolbar.module.scss";

function Toolbar(props: ToolbarProps) {
  const year = props.date.getFullYear();
  const month = (props.date.getMonth() + 1).toString();

  return (
    <div className={styles.container}>
      <div className={styles.date}>{`${year}년 ${month.length === 1 ? `0${month}` : month}월`}</div>
      <ul className={styles.calendarNavigation}>
        <li
          onClick={() => {
            props.onNavigate("PREV");
          }}
        >
          PREV
        </li>
        <li
          onClick={() => {
            props.onNavigate("TODAY");
          }}
        >
          today
        </li>
        <li
          onClick={() => {
            props.onNavigate("NEXT");
          }}
        >
          NEXT
        </li>
      </ul>
    </div>
  );
}

export default Toolbar;
