import { useAtom } from "jotai";
import { debounce } from "lodash";

import { windowSizeAtom } from "store/workout-diary";

import { HeaderComponent } from "components/layouts/index";
import { ContentComponent } from "components/layouts/index";

import "styles/global.scss";
import { UtilService } from "services/util-service";
import styles from "./Home.module.scss";
import { AppInstallGuideModal } from "components/modals";
import { useState } from "react";

export function HomeComponent() {
  const [windowSize, setWindowSize] = useAtom(windowSizeAtom);
  const [appInstallGuideModalState, setAppInstallGuideModalState] = useState(true);

  UtilService.getWindowSize(setWindowSize);

  window.addEventListener(
    "resize",
    debounce(() => {
      UtilService.getWindowSize(setWindowSize);
    }, 100)
  );

  return (
    <div className={styles.container}>
      {appInstallGuideModalState && (
        <AppInstallGuideModal setAppInstallGuideModalState={setAppInstallGuideModalState} />
      )}
      <HeaderComponent />
      <ContentComponent />
    </div>
  );
}
