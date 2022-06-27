import React, { forwardRef } from "react";

import Styles from "./Consulting.module.scss";

import svgTitle from "../../asset/svg/dotsImgTitle.svg";
import svgToolTipTitle from "../../asset/svg/TooltipTitle.svg";
import { Field, Form, Formik } from "formik";
import NewInput from "../../common/inputs/newInput/NewInput";
import { Col } from "react-bootstrap";
import { MdKeyboardArrowLeft } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";

const Consulting = forwardRef((props, ref) => {
  async function sendMessage(body) {
    try {
      const res = await axios.post(
        `https://bticket.hoseinifinance.com/api/v1/spectator/support`,
        body
      );
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data?.message);
    }
  }

  return (
    <div className="py-5 my-5" ref={ref}>
      <div className="d-flex justify-content-center my-5">
        <h2 className="position-relative">
          <div className={`${Styles.posdotsImgTitle} d-none d-lg-flex`}>
            <img src={svgTitle} alt="" />
            {/*<div className={Styles.overlaySvgTitle}></div>*/}
          </div>
          <span className="position-relative">دوست داری </span>
          <span className={Styles.colorText}>بیشتر </span>
          <span>بدونی؟!</span>
          <div className={Styles.svgToolTipTittle}>
            <img src={svgToolTipTitle} alt="" />
          </div>
        </h2>
      </div>
      <div className="center-content text-gray-4 text-center mt-5 pt-5">
        کارشناسان ما با شما تماس میگیرن و به صورت رایگان شما را برای حضور در
        همایش راهنمایی می کنند.
      </div>
      <Col
        xs="8"
        md="6"
        lg="4"
        className={`${Styles.formWrapper} mt-5 mx-auto`}
      >
        <Formik
          initialValues={{ fullName: "", phoneNumber: "" }}
          onSubmit={sendMessage}
        >
          <Form className="d-flex flex-wrap justify-content-center">
            <Col xs="10" md="5" className="mx-1">
              <Field
                as={NewInput}
                label="نام و نام خانوادگی"
                name="fullName"
              ></Field>
            </Col>
            <Col xs="10" md="5" className="mx-1">
              <Field
                as={NewInput}
                label="شماره تلفن"
                name="phoneNumber"
              ></Field>
            </Col>
            <Col xs="10">
              <button className={`${Styles.btn}`}>
                درخواست تماس
                <MdKeyboardArrowLeft size={24} className={Styles.btnIcon} />
              </button>
            </Col>
          </Form>
        </Formik>
      </Col>
    </div>
  );
});

export default Consulting;
