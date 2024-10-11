import React, { useEffect } from "react";
import ReactGA4 from "react-ga4";

import Page from "./common/page";

function HealthPlanContractVideo() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
      ReactGA4.send("pageview");
    }
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
          src="https://www.loom.com/embed/1fc71f8cabfa4971969014a347448116?sid=fbe619b8-9da3-4271-afb0-ab0588bf0732"
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
