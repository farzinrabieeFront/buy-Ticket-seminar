import React, { forwardRef } from "react";
import Styles from "./Teachers.module.scss";
import svgTitle from "../../asset/svg/dotsImgTitle.svg";
import svgToolTipTitle from "../../asset/svg/TooltipTitle.svg";
import { Col, Row } from "react-bootstrap";
import hosseiniImg from "../../asset/images/hoseiniImg.png";
import mirSadefgImg from "../../asset/images/mirSadeghiImg.png";
import underlineTitle from "../../asset/svg/underLineText.svg";
import emailIcon from "../../asset/svg/emailIcon.svg";
import instagramIcon from "../../asset/svg/InatagramIcon.svg";
import telegramIcon from "../../asset/svg/telegramIcon.svg";
import tweeterIcon from "../../asset/svg/tweeterIcon.svg";
import { BiCaretLeft } from "react-icons/bi";

const Teachers = forwardRef((props, ref) => {
  return (
    <>
      <div
        ref={ref}
        className={`${Styles.backImg} d-flex flex-column align-items-center  py-5 position-relative`}
        style={{ minHeight: "622px", background: "white" }}
      >
        {/*<img src={backSvg} alt="" className={Styles.imgBack} />*/}
        <div className="container position-relative ">
          <div className="d-flex justify-content-center mb-5 ">
            <h2 className="position-relative">
              <div className={`${Styles.posdotsImgTitle} d-none d-lg-flex`}>
                <img src={svgTitle} alt="" />
                {/*<div className={Styles.overlaySvgTitle}></div>*/}
              </div>{" "}
              <span className="position-relative">مدرسان</span>
              <span className={Styles.colorText}> همایش</span>
              <div className={Styles.svgToolTipTittle}>
                <img src={svgToolTipTitle} alt="" />
              </div>
            </h2>
          </div>
          <div>
            <Row>
              <Col xs={12} lg={6}>
                <Row>
                  <Col xs={12} lg={6} className="p-0">
                    <div className="d-flex justify-content-center">
                      <img src={hosseiniImg} alt="" />
                    </div>
                  </Col>
                  <Col
                    xs={12}
                    lg={6}
                    className="pt-5 p-0 d-flex justify-content-center justify-content-lg-start"
                  >
                    <div style={{ width: "max-content" }}>
                      <div className="mb-2">
                        <h4 style={{ fontWeight: "700" }}>مهندس محمد حسینی</h4>
                      </div>
                      <div>
                        <ul
                          style={{ listStyleType: "unset" }}
                          className="p-0 m-0 mb-4"
                        >
                          <li className="mb-3">
                            <BiCaretLeft />
                            دکترای مدیریت حرفه‌ای کسب و کار DBA
                          </li>
                          <li className="mb-3">
                            <BiCaretLeft />
                            تحلیلگر و معامله‌گر بازار‌های مالی
                          </li>
                          <li className="mb-3">
                            <BiCaretLeft />
                            بنیان‌گذار آکادمی بازار‌های مالی حسینی فایننس
                          </li>
                        </ul>
                      </div>
                      <div className="d-flex">
                        <a
                          href="mailto:info@hoseinifinance.com"
                          target="_blank"
                        >
                          <div>
                            <img src={emailIcon} alt="" />
                          </div>
                        </a>
                        <a
                          href="https://www.instagram.com/hoseini.finance"
                          target={"_blank"}
                        >
                          <div>
                            <img src={instagramIcon} alt="" />
                          </div>
                        </a>
                        <a
                          href="https://t.me/mohammad_hosseinii"
                          target="_blank"
                        >
                          <div>
                            <img src={telegramIcon} alt="" />
                          </div>
                        </a>
                        <a
                          href="https://twitter.com/hoseini_finance"
                          target="_blank"
                        >
                          <div>
                            <img src={tweeterIcon} alt="" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} lg={6} className="mt-5 mt-lg-0">
                <Col>
                  <Row>
                    <Col xs={12} lg={6} className="p-0">
                      <div className="d-flex justify-content-center">
                        <img src={mirSadefgImg} alt="" />
                      </div>
                    </Col>
                    <Col
                      xs={12}
                      lg={6}
                      className="pt-5 p-0 d-flex justify-content-center justify-content-lg-start"
                    >
                      <div style={{ width: "max-content" }}>
                        <div className="mb-2">
                          <h4 style={{ fontWeight: "700" }}>
                            دکتر علی میرصادقی
                          </h4>
                        </div>
                        <div>
                          <ul
                            style={{ listStyleType: "unset" }}
                            className="p-0 m-0 mb-4"
                          >
                            <li className="mb-3">
                              <BiCaretLeft />
                              دکترای روانشناسی
                            </li>
                            <li className="mb-3">
                              <BiCaretLeft />
                              مدیر و موسس موسسه آموزشی انتشاراتی بارسا
                            </li>
                            <li className="mb-3">
                              <BiCaretLeft />
                              برنده مقام دوم USA Book New
                            </li>
                          </ul>
                        </div>
                        <div className="d-flex">
                          <a href="mailto:HR@barsaholding.com" target="_blank">
                            <div>
                              <img src={emailIcon} alt="" />
                            </div>
                          </a>
                          <a
                            href="https://www.instagram.com/ali_mirsadeghi"
                            target={"_blank"}
                          >
                            <div>
                              <img src={instagramIcon} alt="" />
                            </div>
                          </a>
                          <a
                            href="https://www.t.me/ali_mirsadeghi"
                            target="_blank"
                          >
                            <div>
                              <img src={telegramIcon} alt="" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
});

export default Teachers;
