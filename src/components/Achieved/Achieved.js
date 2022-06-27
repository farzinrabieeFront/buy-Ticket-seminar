import React, { forwardRef } from "react";
import Styles from "./Achieved.module.scss";
import svgTitle from "../../asset/svg/dotsImgTitle.svg";
import svgToolTipTitle from "../../asset/svg/TooltipTitle.svg";
import { Col, Nav, Row } from "react-bootstrap";
import { BiCaretLeft } from "react-icons/bi";
import svgBtnTop from "../../asset/svg/svgBtnTop.svg";
import svgBtnBottom from "../../asset/svg/svgbtnbottom.svg";
import BtnTicket from "../../components/btnTicket/BtnTicket";
import { useNavigate } from "react-router-dom";

const Achieved = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const handleClickPush = () => {
    navigate("/buy");
  };
  return (
    <>
      <div
        className="d-flex flex-column align-items-center justify-content-center py-5"
        style={{
          minHeight: "622px",
          borderBottom: "1px solid #2FAC5D",
        }}
        ref={ref}
      >
        <div className="container">
          <div className="d-flex justify-content-center mb-5 ">
            <h2 className="position-relative">
              <div className={`${Styles.posdotsImgTitle} d-none d-lg-flex`}>
                <img src={svgTitle} alt="" />
                {/*<div className={Styles.overlaySvgTitle}></div>*/}
              </div>{" "}
              <span className="position-relative">
                {" "}
                با شرکت در این همایش چی{" "}
              </span>
              <span className={Styles.colorText}>بدست</span> می‌آورم؟
              <div className={Styles.svgToolTipTittle}>
                <img src={svgToolTipTitle} alt="" />
              </div>
            </h2>
          </div>
          <div className="w-100">
            <Row className="w-100 m-0 mb-5">
              <Col
                className="d-flex justify-content-start justify-content-lg-center"
                xs={12}
                lg={6}
              >
                <div className={`${Styles.colText} `}>
                  <div>
                    <p>
                      <BiCaretLeft />
                      ۱۲ ساعت آموزش توسط مهندس محمد حسینی و دکتر علی میر
                      صادقی
                    </p>
                    <p>
                      <BiCaretLeft />
                      دو روز در کنار هم با یک هدف (شناخت و درک بازار و خودمان به
                      عنوان معامله‌گر)
                    </p>
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
                className="d-flex justify-content-start justify-content-lg-center"
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
                  <p>
                    <BiCaretLeft />
                    پذیرایی، فرصت شبکه‌سازی و نهار
                  </p>
                  <p>
                    <BiCaretLeft />
                    کنسرت امید حاجیلی
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
    </>
  );
});

export default Achieved;
