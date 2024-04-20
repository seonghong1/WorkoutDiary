import styles from "./AppInstallGuideModal.module.scss";
import logo from "assets/images/logo192.png";
import { IoIosClose } from "react-icons/io";
import { MdIosShare } from "react-icons/md";
import { GrInstallOption } from "react-icons/gr";
import { useState } from "react";

interface IAppInstallGuideModalProps {
  setAppInstallGuideModalState: (appInstallGuideModalState: boolean) => void;
}

export function AppInstallGuideModal({ setAppInstallGuideModalState }: IAppInstallGuideModalProps) {
  const [guidContentState, setGuidContentState] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <button
          onClick={() => {
            setAppInstallGuideModalState(false);
          }}
          className={styles.close}
        >
          <IoIosClose />
        </button>
        <div className={styles.content}>
          <img src={logo} alt="" />
          <p>
            Workout Dairy 앱으로 사용해 보아요!
            <br />
            <span>홈화면에 앱을 추가해 편리하게 사용할 수 있어요.</span>
          </p>
        </div>
      </div>
      <button
        onClick={() => {
          setGuidContentState(true);
        }}
        className={styles.add}
      >
        <MdIosShare />
        <p>눌러 홈에 추가</p>
      </button>
      {guidContentState && (
        <div className={styles.guidContent}>
          <GrInstallOption />
          <div className={styles.title}>PWA 설치 안내</div>
          <p>
            브라우저의 <MdIosShare />
            아이콘을 클릭하고
            <br />
            "홈 화면에 추가"를 선택하세요!
          </p>
          <button
            onClick={() => {
              setAppInstallGuideModalState(false);
              setGuidContentState(false);
            }}
          >
            확인
          </button>
        </div>
      )}
    </div>
  );
}
