import React from "react";
import classes from "./fourthSection.module.css";

const FourthSection = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <img src="https://www.aesop.com/u1nb1km7t5q7/6a0rFYweQvQusUfEHpowUJ/32611c5a1ea838756fd635261d88d2db/Aesop-Generic-Images-Facial-Appointments-1-Mid-Desktop-2560x1440px.jpg"></img>
        </div>
        <div className={classes.section1}>
          <h4 className={classes.header}>Efficacious pairings</h4>
          <h2 className={classes.headerBig}>
            Composure for the skin and senses
          </h2>
          <p className={classes.paragraph}>
            Our consultants have long combined complementary formulations to
            effect additional benefits for the skin. Incorporate this
            time-honoured practice into your regimen with our recommended
            bundles.{" "}
          </p>
          <a href="#" className={classes.btnDark}>
            Browse Skin Care Bundles
            <div className={classes.icon}>
              <i class="fas fa-arrow-right"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
