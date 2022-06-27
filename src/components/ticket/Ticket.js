import React, { useEffect, useState } from "react";

import Styles from "./Ticket.module.scss";

import { AiOutlineCloudDownload, AiOutlineCopy } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import font from "./IRANSansWeb_Medium.ttf";

import QRCode from "qrcode.react";
import { Col, Row } from "react-bootstrap";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import domtoimage from "dom-to-image";
import CopyToClipboard from "../copy-to-clipboard/CopyToClipboard";

const Ticket = ({ data, ticketNum = 1 }) => {
  const [type, setType] = useState("");

  useEffect(() => {
    if (localStorage.getItem("packageType")) {
      setType(localStorage.getItem("packageType"));
    }
  }, [localStorage.getItem("packageType")]);

  function downloadHandler() {
    html2canvas(document.getElementById(`ticket-${data.ticketId}-print`))
      .then(function (canvas) {
        const doc = new jsPDF("l", "px", [350, 900]);
        // doc.addFont(font, "iran", "normal");
        // doc.setFont("iran");
        // doc
        //   .text(`نام و نام خانوادگی : ${data.spectator.fullName}`, 8, 3)
        //   .setR2L(false);
        // doc.text(` ${data.ticketId} : شماره تیکت`, 8, 4).setR2L(true);
        doc.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 900, 350);
        // doc.fromHTML(ticket, 15, 15, {
        //   width: 170,
        // });
        doc.save(`${data.ticketId}.pdf`);
      })
      .catch((e) => console.log(e));
  }

  return [
    <Row
      id={`ticket-${data.ticketId}`}
      className={`${Styles.ticketWrrapper} mb-3 d-flex`}
    >
      <div className={`${Styles.rightSide} center-content FaNum`}>
        {ticketNum}
      </div>
      <div
        className={`d-flex flex-column justify-content-around ${Styles.data} p-4`}
      >
        <Row className="d-flex">
          <Col xs={6} md={4} className="d-flex flex-column mb-2">
            <span className="text-gray-3 size-3">نام و نام خانوادگی</span>
            <span className="text-gray-4">{data?.spectator?.fullName}</span>
          </Col>
          <Col xs={6} md={4} className="d-flex flex-column mb-2">
            <span className="text-gray-3 size-3">شماره تلفن</span>
            <span className="text-gray-4">{data?.spectator?.phoneNumber}</span>
          </Col>
          <Col xs={12} md={4} className="d-flex flex-column mb-2">
            <span className="text-gray-3 size-3">ایمیل</span>
            <span className="text-gray-4">{data?.spectator?.email}</span>
          </Col>
          <Col xs={6} md={4} className="d-flex flex-column my-2">
            <span className="text-gray-3 size-3">کد ملی</span>
            <span className="text-gray-4">{data?.spectator?.nc}</span>
          </Col>
        </Row>
        <Row className="d-flex">
          <Col md="4" className="center-content justify-content-start mt-3">
            <div className={`${Styles.qrCode}`}>
              <QRCode
                value={data.ticketId}
                id={`qrcode-${data.ticketId}`}
                className="m-0"
              />
            </div>
          </Col>
          <Col md="8" className="d-flex flex-column mt-3">
            <Row className={`${Styles.ticketNum} mb-3 d-flex`}>
              <Col xs="6" md="4" className="text-gray-5 px-0">
                شماره بلیط :
              </Col>
              <Col xs="4" className="size-1 center-content text-gray-5 px-0">
                <CopyToClipboard data={data.ticketId}>
                  {data.ticketId}
                </CopyToClipboard>
              </Col>
            </Row>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mt-3">
              <button
                className={`${Styles.btn} text-gray-3 mx-4`}
                onClick={downloadHandler}
              >
                <AiOutlineCloudDownload size={24} className="ms-2" />
                دانلود
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </Row>,
    <PrintTicket printData={data} />,
  ];
};

export default Ticket;

const PrintTicket = ({ printData }) => {
  return (
    <Row
      id={`ticket-${printData?.ticketId}-print`}
      className={`${Styles.printTicketWrrapper} mb-3`}
    >
      <div
        className={`d-flex flex-column justify-content-around ${Styles.data} p-4`}
      >
        <Row className="d-flex">
          <Col xs={4} className="d-flex flex-column mb-2">
            <span className="text-gray-3 size-3">نام و نام خانوادگی</span>
            <span className="text-gray-4">
              {printData?.spectator?.fullName}
            </span>
          </Col>
          <Col xs={4} className="d-flex flex-column mb-2">
            <span className="text-gray-3 size-3">شماره تلفن</span>
            <span className="text-gray-4">
              {printData?.spectator?.phoneNumber}
            </span>
          </Col>
          <Col xs={4} className="d-flex flex-column mb-2">
            <span className="text-gray-3 size-3">ایمیل</span>
            <span className="text-gray-4">{printData?.spectator?.email}</span>
          </Col>
          <Col xs={4} className="d-flex flex-column my-2">
            <span className="text-gray-3 size-3">کد ملی</span>
            <span className="text-gray-4">{printData?.spectator?.nc}</span>
          </Col>
        </Row>
        <Row className="d-flex">
          <Col xs="4" className="center-content justify-content-start mt-3">
            <div className={`${Styles.qrCode}`}>
              <QRCode
                value={printData?.ticketId}
                id={`qrcode-${printData?.ticketId}`}
                className="m-0"
              />
            </div>
          </Col>
          <Col xs="8" className="d-flex flex-column mt-3">
            <Row className={`${Styles.ticketNum} mb-3 d-flex`}>
              <Col xs="4" className="text-gray-5 px-0">
                شماره بلیط :
              </Col>
              <Col className="size-1 center-content text-gray-5 px-0">
                <CopyToClipboard printData={printData?.ticketId}>
                  {printData?.ticketId}
                </CopyToClipboard>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Row>
  );
};
