import React, { useEffect } from "react";
import ReactGA4 from "react-ga4";

import Page from "./common/page";

function HealthPlanVideo() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
      ReactGA4.send("pageview");
    }
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
          src="https://www.loom.com/embed/13cb06fe46b14a8fb1241c3f2f091889?sid=f9f155d2-90fe-4ee1-bb3b-f38e3957267c"
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
