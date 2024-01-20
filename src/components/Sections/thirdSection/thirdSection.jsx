import React from "react";
import classes from "./thirdSection.module.css";

const ThirdSection = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div className={classes.section1}>
          <h4 className={classes.header}>Online only</h4>
          <h2 className={classes.headerBig}>
            Familiar fragrances, doubled in volume
          </h2>
          <p className={classes.paragraph}>
            For those who feel that 50 millilitres just fly by too quickly,
            three of our unorthodox Eaux de Parfum—Tacit, Hwyl and Marrakech
            Intense—are now available, exclusively online, in larger 100mL
            bottles.{" "}
          </p>
          <a href="#" className={classes.btnDark}>
            Discover Vitamins
            <div className={classes.icon}>
              <i class="fas fa-arrow-right"></i>
            </div>
          </a>
        </div>
        <div className={classes.imageContainer}>
          <img src="https://www.aesop.com/u1nb1km7t5q7/73c4JT56oX3r1xn2UVqAzd/41db81db3809032ac0ab82b9d6cdc3d1/Aesop_Skin_Care_Plus_2021_Web_Range_Page_Secondary_Mid_GL_Desktop_2560x1440px.jpg"></img>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
