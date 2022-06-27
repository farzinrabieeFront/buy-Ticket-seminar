import React, { forwardRef, useEffect, useState } from "react";
import Styles from "./Conductor.module.scss";
import svgTitle from "../../asset/svg/dotsImgTitle.svg";
import svgToolTipTitle from "../../asset/svg/TooltipTitle.svg";
import { MdOutlineDateRange } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { Col, Nav, Row } from "react-bootstrap";
import BtnTicket from "../../components/btnTicket/BtnTicket";
import lineConductor from "../../../src/asset/svg/lineConductor.svg";
import lineConductor2 from "../../../src/asset/svg/lineConductorl2.svg";
import {
  AiFillCaretDown,
  AiFillCaretLeft,
  AiFillCaretRight,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

let data = [
  { text: "پذیرش", time: "7:00" },
  { text: "مراسم شروع همایش", time: "8:30" },
  { text: "آینده اقتصاد ایران و جهان", time: "9:00" },
  { text: "استراحت و تعامل", time: "11:00" },
  { text: "روانشناسی پول", time: "12:00" },
  { text: "نهار", time: "14:00" },
  { text: "متاورس و NFT بخش اول", time: "15:30" },
  { text: "استراحت و تعامل", time: "17:00" },
  { text: "متاورس و NFT‌ بخش دوم", time: "17:45" },
];
let data1 = [
  { text: "پذیرش", time: "7:15" },
  { text: "معاملات و سرمایه‌گذاری", time: "9:00" },
  { text: "استراحت و تعامل", time: "11:00" },
  { text: "روانشناسی در کسب و کار", time: "12:00 " },
  { text: "نهار", time: "14:00" },
  { text: "استراتژی و روانشناسی معاملاتی", time: "15:30" },
  { text: "کنسرت", time: "18:00" },
  { text: "پاسخگویی به سوالات شرکت‌کنندگان", time: "18:30" },
];

const Conductor = forwardRef((props, ref) => {
  const navigate = useNavigate();

  const handleClickPush = () => {
    navigate("/buy");
  };
  return (
    <div
      ref={ref}
      className="d-flex flex-column align-items-center justify-content-center py-5"
      style={{
        background: "#FBFCFB",
        minHeight: "622px",
        borderBottom: "1px solid #2FAC5D",
      }}
    >
      <div className="container">
        <div className="d-flex justify-content-center mb-5 ">
          <h2 className="position-relative mt-5">
            <div className={`${Styles.posdotsImgTitle} d-none d-lg-flex`}>
              <img src={svgTitle} alt="" />
              {/*<div className={Styles.overlaySvgTitle}></div>*/}
            </div>{" "}
            <span className="position-relative">کنداکتور</span>
            <span className={Styles.colorText}>همایش</span>
            <div className={Styles.svgToolTipTittle}>
              <img src={svgToolTipTitle} alt="" />
            </div>
          </h2>
        </div>

        <p
          className={`${Styles.titleText} m-0 d-flex align-items-center justify-content-center`}
        >
          <MdOutlineDateRange />
          26 و 27 خرداد
        </p>
        <p
          className={`${Styles.titleText} m-0 d-flex align-items-center mb-3 mb-lg-0 justify-content-center`}
        >
          <IoLocationOutline />
          سالن همایش های برج میلاد تهران
        </p>
        <div>
          <div className="position-relative">
            <p className={Styles.textGreen}>پنجشنبه ۲۶ خرداد</p>

            <div>
              <Row
                className={`${Styles.Rows} row-cols-3 row-cols-lg-6 mb-5 position-relative`}
              >
                {data.map((itm, ind) => (
                  <Col className="">
                    <div
                      className={`${Styles.boxes} d-flex d-lg-none ${
                        ind === 2 ||
                        ind === 5 ||
                        ind === 8 ||
                        ind === 11 ||
                        ind === 14
                          ? Styles.bozexNotBorder
                          : ""
                      }
                     
                      `}
                    >
                      {itm.text}
                      {ind !== 2 &&
                      ind !== 8 &&
                      ind !== 11 &&
                      ind !== 14 &&
                      ind !== 5 ? (
                        <div className={Styles.posIcon}>
                          <AiFillCaretLeft style={{ fill: "#2FAC5D" }} />
                        </div>
                      ) : (
                        ""
                      )}

                      {/*<div className={Styles.posIcon}>*/}
                      {/*  <AiFillCaretRight style={{ fill: "#2FAC5D" }} />*/}
                      {/*</div>*/}

                      {/*<div className={Styles.posIcon}>*/}
                      {/*  <AiFillCaretLeft style={{ fill: "#2FAC5D" }} />*/}
                      {/*</div>*/}
                    </div>
                    <div
                      className={`${Styles.boxes} d-none d-lg-flex ${
                        ind === 5 || ind === 8 || ind === 11
                          ? Styles.bozexNotBorder
                          : ""
                      }
                     
                      `}
                    >
                      {itm.text}
                      {ind !== 5 && ind !== 8 && ind !== 14 ? (
                        <div className={Styles.posIcon}>
                          <AiFillCaretLeft style={{ fill: "#2FAC5D" }} />
                        </div>
                      ) : (
                        ""
                      )}

                      {/*<div className={Styles.posIcon}>*/}
                      {/*  <AiFillCaretRight style={{ fill: "#2FAC5D" }} />*/}
                      {/*</div>*/}

                      {/*<div className={Styles.posIcon}>*/}
                      {/*  <AiFillCaretLeft style={{ fill: "#2FAC5D" }} />*/}
                      {/*</div>*/}
                    </div>
                    <p
                      className="mb-4 d-flex justify-content-center"
                      style={{
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "#70798E",
                      }}
                    >
                      {itm.time}
                    </p>
                  </Col>
                ))}
                {/*<div className={Styles.posDownIcon}>*/}
                {/*  {" "}*/}
                {/*  <AiFillCaretDown style={{ fill: "#2FAC5D" }} />*/}
                {/*</div>*/}
                {/*<div className={Styles.posDownIcon2}>*/}
                {/*  {" "}*/}
                {/*  <AiFillCaretDown style={{ fill: "#2FAC5D" }} />*/}
                {/*</div>*/}
              </Row>
            </div>
          </div>
          <div className="position-relative">
            <p className={Styles.textGreen}>جمعه 27 خرداد</p>

            <div>
              <Row
                className={`${Styles.Rows2} row-cols-3 row-cols-lg-6 mb-5 position-relative`}
              >
                {data1.map((itm, ind) => (
                  <Col className="">
                    <div
                      className={`${Styles.boxes} d-flex d-lg-none ${
                        ind === 10 || ind === 2 || ind === 5 || ind === 7
                          ? Styles.bozexNotBorder
                          : ""
                      }
                      ${ind === 12 ? Styles.boxesBack : ""}
                      
                      `}
                    >
                      {ind !== 2 && ind !== 5 && ind !== 7 && ind !== 10 ? (
                        <div className={Styles.posIcon}>
                          <AiFillCaretLeft style={{ fill: "#2FAC5D" }} />
                        </div>
                      ) : (
                        ""
                      )}

                      {itm.text}
                    </div>
                    <div
                      className={`${Styles.boxes} d-none d-lg-flex ${
                        ind === 5 || ind === 7 ? Styles.bozexNotBorder : ""
                      }
                      ${ind === 12 ? Styles.boxesBack : ""}
                      
                      `}
                    >
                      {ind !== 5 && ind !== 7 ? (
                        <div className={Styles.posIcon}>
                          <AiFillCaretLeft style={{ fill: "#2FAC5D" }} />
                        </div>
                      ) : (
                        ""
                      )}

                      {itm.text}
                    </div>
                    <p
                      className="mb-4 d-flex justify-content-center"
                      style={{
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "#70798E",
                      }}
                    >
                      {itm.time}
                    </p>
                  </Col>
                ))}
                {/*<div className={Styles.posDownIconSection2}>*/}
                {/*  {" "}*/}
                {/*  <AiFillCaretDown style={{ fill: "#2FAC5D" }} />*/}
                {/*</div>*/}
              </Row>
            </div>
          </div>
        </div>
        <div className="size-3 fw-500 ms-lg-2">
          <BtnTicket onClick={() => props.executeScroll(4)} />
        </div>
      </div>
    </div>
  );
});

export default Conductor;
