import React from "react";
import classes from "./secondSection.module.css";

const SecondSection = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div className={classes.section1}>
          <h4>The Athenaeum</h4>
          <h2>A guide to caring for dry skin</h2>
          <p className={classes.paragraph}>
            Exploring the causes behind parched skin and formulations to restore
            hydration.{" "}
          </p>
          <a href="#" className={classes.btnDark}>
            Read More
            <div className={classes.icon}>
              <i class="fas fa-arrow-right"></i>
            </div>
          </a>
        </div>
        <div className={classes.videoContainer}>
          <video>
            <source src="https://player.vimeo.com/external/535715853.hd.mp4?s=391e3ff0e4217a298622caf7765a1876c8cc8b37&profile_id=175"></source>
          </video>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
