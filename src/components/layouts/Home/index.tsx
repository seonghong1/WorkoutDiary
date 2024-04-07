import { HeaderComponent } from "components/layouts/index";
import { ContentComponent } from "components/layouts/index";

import "styles/global.scss";

export function HomeComponent() {
  return (
    <>
      <HeaderComponent />
      <ContentComponent />
    </>
  );
}
