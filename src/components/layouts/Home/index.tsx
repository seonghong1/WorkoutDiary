import { useAtom } from "jotai";
import { debounce } from "lodash";

import { windowSizeAtom } from "store/workout-diary";

import { HeaderComponent } from "components/layouts/index";
import { ContentComponent } from "components/layouts/index";

import "styles/global.scss";
import { UtilService } from "services/util-service";
import styles from "./Home.module.scss";

export function HomeComponent() {
  const [windowSize, setWindowSize] = useAtom(windowSizeAtom);
  UtilService.getWindowSize(setWindowSize);

  window.addEventListener(
    "resize",
    debounce(() => {
      UtilService.getWindowSize(setWindowSize);

      console.log("windowSize : ", windowSize);
    }, 100)
  );

  return (
    <div className={styles.container}>
      <HeaderComponent />
      <ContentComponent />
    </div>
  );
}
