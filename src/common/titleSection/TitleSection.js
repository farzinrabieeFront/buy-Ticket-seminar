import React from "react";
import Styles from "./TitleSection.scss";
import svgTitle from "../../asset/svg/dotsImgTitle.svg.svg";
import svgToolTipTitle from "../../asset/svg/TooltipTitle.svg";

const TitleSection = () => {
  return (
    <>
      <h2 className="position-relative">
        <div className={`${Styles.posdotsImgTitle} d-none d-lg-flex`}>
          <img src={svgTitle} alt="" />
          {/*<div className={Styles.overlaySvgTitle}></div>*/}
        </div>{" "}
        <span className="position-relative"> با شرکت در این همایش چی </span>
        <span className={Styles.colorText}>بدست</span> می‌آورم؟
        <div className={Styles.svgToolTipTittle}>
          <img src={svgToolTipTitle} alt="" />
        </div>
      </h2>
    </>
  );
};

export default TitleSection;
