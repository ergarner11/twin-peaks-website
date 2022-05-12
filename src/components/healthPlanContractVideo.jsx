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
          src="https://www.loom.com/embed/92fb22f5bddf4bc595478b0102041a01"
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
