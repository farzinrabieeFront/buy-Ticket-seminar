import React from "react";
import Styles from "./BtnTicket.module.scss";
import svgBtnTop from "../../asset/svg/svgBtnTop.svg";
import svgBtnBottom from "../../asset/svg/svgbtnbottom.svg";
import svgBtnTopGray from "../../asset/svg/svgBtnTopGray.svg"
import svgBtnBottomGray from "../../asset/svg/svgBtnBottomGray.svg"

const BtnTicket = ({ onClick,title,gray }) => {
  return (
    <div className="w-100 d-flex justify-content-center" onClick={onClick}>
      <button className={`${gray?Styles.buttonsGray: Styles.buttons}`} style={{background:gray?"white":null}}>
        <img src={ gray?svgBtnTopGray:svgBtnTop} alt="" className={Styles.svgBtnTop} />
        <img src={gray? svgBtnBottomGray:svgBtnBottom} alt="" className={Styles.svgBtnBottom} />
          {title?title:"خرید بلیط"}

      </button>
    </div>
  );
};

export default BtnTicket;
