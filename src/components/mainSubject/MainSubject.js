import React, { forwardRef } from "react";
import { Col, Nav, Row } from "react-bootstrap";
import { BiCaretLeft } from "react-icons/bi";
import Styles from "./MainSubject.module.scss";
import svgTitle from "../../asset/svg/dotsImgTitle.svg";
import svgToolTipTitle from "../../asset/svg/TooltipTitle.svg";
import svgBtnBottom from "../../asset/svg/svgbtnbottom.svg";
import svgBtnTop from "../../asset/svg/svgBtnTop.svg";
import backSvg from "../../asset/svg/backGround.svg";
import BtnTicket from "../../components/btnTicket/BtnTicket";
import { useNavigate } from "react-router-dom";
const MainSubject = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const handleClickPush = () => {
    navigate("/buy");
  };

  return (
    <div
      className={`${Styles.backImg} d-flex flex-column align-items-center justify-content-center py-5 position-relative`}
      style={{ minHeight: "622px" }}
      ref={ref}
    >
      <div className="container">
        <div className="d-flex justify-content-center mb-5 ">
          <h2 className="position-relative">
            <div className={`${Styles.posdotsImgTitle} d-none d-lg-flex`}>
              <img src={svgTitle} alt="" />
              {/*<div className={Styles.overlaySvgTitle}></div>*/}
            </div>{" "}
            <span className="position-relative">موضوعات اصلی</span>
            <span className={Styles.colorText}> همایش</span>
            <div className={Styles.svgToolTipTittle}>
              <img src={svgToolTipTitle} alt="" />
            </div>
          </h2>
        </div>
        <div className="w-100">
          <Row className="w-100 m-0 mb-5">
            <Col
              className="d-flex justify-content-lg-center justify-content-start"
              xs={12}
              lg={6}
            >
              <div className={`${Styles.colText} `}>
                <div>
                  <p>
                    <BiCaretLeft />
                    بررسی آینده اقتصاد کلان ایران و جهان
                  </p>
                  <p>
                    <BiCaretLeft />
                    نگاهی عمیق به روانشناسی پول
                  </p>
                  <p>
                    <BiCaretLeft />
                    بررسی آینده NFT , Metaverse , web 3.0 و کاربردها
                  </p>
                </div>
              </div>
            </Col>
            <Col
              className="d-flex justify-content-lg-center justify-content-start"
              xs={12}
              lg={6}
            >
              <div className={`${Styles.colText} `}>
                <p>
                  <BiCaretLeft />
                  نگاهی عمیق به سرمایه گذاری ، سبد گردانی و معامله گری
                </p>
                <p>
                  <BiCaretLeft />
                  بررسی روانشناسی معامله گری و روانشناسی در کسب و کار
                </p>
                <p>
                  <BiCaretLeft />
                  گپ و کفتگو و پاسخ به سوالات شرکت کنندگان
                </p>
              </div>
            </Col>
          </Row>
          <div className="size-3 fw-500 ms-lg-2">
            <BtnTicket onClick={() => props.executeScroll(4)} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default MainSubject;
