import React from "react";
import logo from "../../../images/logoo.jpg";
import classes from "./firstSection.module.css";

const FirstSection = () => {
  return (
    <div className={classes.container2}>
      <div className={classes.section1}>
        <img className={classes.logo} src={logo}></img>
        <div className={classes.motherDayContainer}>
          <h4>Potent and peerless</h4>
          <h2>B Triple C Facial Balancing Gel</h2>
          <p className={classes.motherDayParagraph}>
            Rich in Vitamins B and C, this lightly hydrating gel with a
            honey-like texture, replenishes, softens and balances the skin.{" "}
          </p>
          <a href="#" className={classes.btnDark}>
            Discover gifts for mother figures{" "}
            <div className={classes.icon}>
              <i class="fas fa-arrow-right"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
