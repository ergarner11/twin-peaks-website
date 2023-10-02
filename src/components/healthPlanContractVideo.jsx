import React, { useEffect } from "react";
import ReactGA4 from "react-ga4";

import Page from "./common/page";

function HealthPlanContractVideo() {
  useEffect(() => {
    ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
    ReactGA4.send("pageview");
  }, []);

  return (
    <Page
      className="health-plan-contract-video"
      title="Health Plan Contract Overview"
      description="In this video, we'll go over the details of the Health Plan Contract so that you'll know exactly what to expect when you sign up"
    >
      <div className="container">
        <iframe
          title="Health Plan Contract Overview"
          src="https://www.loom.com/embed/99f4d4072aa64fe99b2a4cee754da80a?sid=4d02c84a-e2ee-4c83-a2af-9453b1cd0fee"
          frameborder="0"
          webkitAllowFullscreen
          mozAllowFullscreen
          allowFullScreen
        ></iframe>
      </div>
    </Page>
  );
}
export default HealthPlanContractVideo;
