import { useEffect, useState } from "react";
import { useSetAtom } from "jotai";
import { debounce } from "lodash";

import { windowSizeAtom } from "store/workout-diary";
import { UtilService } from "services/util-service";

import { HeaderComponent } from "components/layouts/index";
import { ContentComponent } from "components/layouts/index";
import { AppInstallGuideModal } from "components/modals";
import styles from "./Home.module.scss";
import "styles/global.scss";

function HomeComponent() {
  const setWindowSize = useSetAtom(windowSizeAtom);
  const [appInstallGuideModalState, setAppInstallGuideModalState] = useState(false);

  useEffect(() => {
    if (UtilService.getUserDeviceType() === "mobile") {
      setAppInstallGuideModalState(true);
    }

    UtilService.getWindowSize(setWindowSize);

    window.addEventListener(
      "resize",
      debounce(() => {
        UtilService.getWindowSize(setWindowSize);
      }, 100)
    );
  }, []);

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

export default HomeComponent;
