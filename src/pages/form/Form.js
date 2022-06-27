import React, { useEffect, useRef, useState } from "react";
import NewInput from "../../common/inputs/newInput/NewInput";
import { FastField, Field, Form, Formik, useField } from "formik";
import { Col, Container, Row } from "react-bootstrap";
import Styles from "./Form.module.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { MdStar } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { ImPlus } from "react-icons/im";
import * as yup from "yup";

export default function TicketForm({ data, deleteHandler, onChange, formNum }) {
  const formikRef = useRef();

  function Convertnumber2english(str) {
    str = str.replace("۰", "0", str);
    str = str.replace("۱", "1", str);
    str = str.replace("۲", "2", str);
    str = str.replace("۳", "3", str);
    str = str.replace("۴", "4", str);
    str = str.replace("۵", "5", str);
    str = str.replace("۶", "6", str);
    str = str.replace("۷", "7", str);
    str = str.replace("۸", "8", str);
    str = str.replace("۹", "9", str);

    return str;
  }

  return (
    <Formik
      innerRef={formikRef}
      enableReinitialize={true}
      initialValues={
        Object.keys(data).length
          ? data
          : {
              fullName: "",
              phoneNumber: "",
              email: "",
              // howDidYouMeetUs: "",
            }
      }
      validate={onChange}
      validationSchema={yup.object().shape({
        fullName: yup
          .string()
          .required("این فیلد اجباری است")
          .matches(/^[\u0600-\u06FF\s]+$/, {
            message: "لطفا فارسی وارد کنید.",
            excludeEmptyString: false,
          }),
        phoneNumber: yup
          .string()
          .required("این فیلد اجباری است")
          .matches(/(?=.*[0-9])/, {
            message: "فقط اعداد لاتین وارد کنید",
            excludeEmptyString: false,
          })
          .matches(/(?=.*[0-9](0[1-5]|[1 3]\d|2[0-2]|98)\d{7})/, {
            message: "شماره تلفن معتبر نیست",
            excludeEmptyString: false,
          }),
        email: yup
          .string()
          .required("این فیلد اجباری است")
          .email("ایمیل وارد شده معتبر نیست"),
        nc: yup
          .string()
          .required("این فیلد اجباری است")
          .matches(/^\d{10}$/, {
            message: "کد ملی را درست وارد کنید",
            excludeEmptyString: false,
          }),
        address: yup
          .string()
          .required("این فیلد اجباری است")
          .matches(/^[\u0600-\u06FF\s]+$/, {
            message: "لطفا فارسی وارد کنید.",
            excludeEmptyString: false,
          })
          .max(200, "تعداد کاراکتر های آدرس بیش از حد مجاز است"),
      })}
    >
      <Form className={`${Styles.form}  mx-0 p-3  `}>
        {/*<Row className="d-flex justify-content-between">*/}
        {/*  <Col xs={1} lg={1}>*/}
        {/*    <div className={`${Styles.number} w-100  center-content FaNum`}>*/}
        {/*      {formNum}*/}
        {/*    </div>*/}
        {/*  </Col>*/}
        {/*  <Col xs={12} md={3}>*/}
        {/*    <FastField*/}
        {/*      label="نام و نام خانوادگی"*/}
        {/*      name="fullName"*/}
        {/*      size="lg"*/}
        {/*      labelClassName="text-gray-3"*/}
        {/*      className="text-gray-4 size-4 "*/}
        {/*      as={NewInput}*/}
        {/*    />*/}
        {/*  </Col>*/}
        {/*  <Col xs={12} md={3}>*/}
        {/*    <FastField*/}
        {/*      label="شماره تلفن"*/}
        {/*      name="phoneNumber"*/}
        {/*      size="lg"*/}
        {/*      labelClassName="text-gray-3"*/}
        {/*      className="text-gray-4 size-4 "*/}
        {/*      as={NewInput}*/}
        {/*    />*/}
        {/*  </Col>*/}
        {/*  <Col xs={12} md={3}>*/}
        {/*    <FastField*/}
        {/*      label="ایمیل"*/}
        {/*      name="email"*/}
        {/*      type="email"*/}
        {/*      size="lg"*/}
        {/*      labelClassName="text-gray-3"*/}
        {/*      className="text-gray-4 size-4 "*/}
        {/*      as={NewInput}*/}
        {/*    />*/}
        {/*  </Col>*/}
        {/*</Row>*/}
        {/*<Row className="align-items-center justify-content-between flex-column-reverse flex-md-row">*/}
        {/*  <Col xs={12} md={1}>*/}
        {/*    <div className="text-center">*/}
        {/*      <RiDeleteBinLine*/}
        {/*        size={25}*/}
        {/*        className="text-gray-1 pointer"*/}
        {/*        onClick={deleteHandler}*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*  </Col>*/}
        {/*  <Col xs={12} md={3} className="ps-0">*/}
        {/*    <FastField*/}
        {/*      label="کدملی"*/}
        {/*      name="nc"*/}
        {/*      type="nc"*/}
        {/*      size="lg"*/}
        {/*      labelClassName="text-gray-3"*/}
        {/*      className="text-gray-4 size-4 "*/}
        {/*      as={NewInput}*/}
        {/*    />*/}
        {/*  </Col>*/}
        {/*  <Col xs={12} md={7} className="ps-0">*/}
        {/*    <FastField*/}
        {/*      label="آدرس"*/}
        {/*      name="address"*/}
        {/*      type="address"*/}
        {/*      size="lg"*/}
        {/*      labelClassName="text-gray-3"*/}
        {/*      className="text-gray-4 size-4 "*/}
        {/*      as={NewInput}*/}
        {/*    />*/}
        {/*  </Col>*/}
        {/*</Row>*/}

        <Row>
          <Col xs={12} md={1}>
            <Row className="h-100 pt-md-5 center-content">
              <Col xs={12} lg={12}>
                <div className={`${Styles.number} w-100 FaNum`}>{formNum}</div>
              </Col>
            </Row>
          </Col>
          <Col md={10} xs={12} className="mt-5">
            <Row>
              <Col xs={12} md={4}>
                <FastField
                  label="نام و نام خانوادگی"
                  name="fullName"
                  size="lg"
                  labelClassName="text-gray-3"
                  className="text-gray-4 size-4 "
                  as={NewInput}
                />
              </Col>
              <Col xs={12} md={4}>
                <FastField
                  label="شماره تلفن"
                  name="phoneNumber"
                  size="lg"
                  labelClassName="text-gray-3"
                  className="text-gray-4 size-4 "
                  as={NewInput}
                />
              </Col>
              <Col xs={12} md={4}>
                <FastField
                  label="ایمیل"
                  name="email"
                  type="email"
                  size="lg"
                  labelClassName="text-gray-3"
                  className="text-gray-4 size-4 "
                  as={NewInput}
                />
              </Col>
              <Col xs={12} md={4}>
                <FastField
                  label="کدملی"
                  name="nc"
                  type="nc"
                  size="lg"
                  labelClassName="text-gray-3"
                  className="text-gray-4 size-4 "
                  as={NewInput}
                />
              </Col>
              <Col xs={12} md={8}>
                <FastField
                  label="آدرس"
                  name="address"
                  type="address"
                  size="lg"
                  labelClassName="text-gray-3"
                  className="text-gray-4 size-4 "
                  as={NewInput}
                />
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={1}>
            <Row className="h-100 pt-md-5 center-content mb-4">
              <Col xs={12} lg={12}>
                <div className="text-center">
                  <RiDeleteBinLine
                    size={25}
                    className="text-gray-1 pointer"
                    onClick={deleteHandler}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </Formik>
  );
}
