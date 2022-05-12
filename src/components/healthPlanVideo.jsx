import React, { useEffect } from "react";
import ReactGA4 from "react-ga4";

import Page from "./common/page";

function HealthPlanVideo() {
  useEffect(() => {
    ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
    ReactGA4.send("pageview");
  }, []);

  return (
    <Page
      className="health-plan-video"
      title="Health Plan Overview"
      description="Watch this short video to learn more about our Health Plans and to figure out which one is best for your pet!"
    >
      <div className="container">
        <iframe
          title="Health Plan Overview"
          src="https://www.loom.com/embed/93d32782d10041f9a9de7e854aed1f62"
          frameborder="0"
          webkitAllowFullscreen
          mozAllowFullscreen
          allowFullScreen
        ></iframe>
      </div>
    </Page>
  );
}
export default HealthPlanVideo;
