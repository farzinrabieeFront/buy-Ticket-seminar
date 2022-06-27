import React, { forwardRef, useEffect, useState } from "react";
import Styles from "./BuyTicket.module.scss";
import svgTitle from "../../asset/svg/dotsImgTitle.svg";
import svgToolTipTitle from "../../asset/svg/TooltipTitle.svg";
import { Col, Row } from "react-bootstrap";
import headerCardGold from "../../asset/svg/headerCardGold.svg";
import headercardPlatine from "../../asset/svg/headerCardPlatine.svg";
import headerCardSilver from "../../asset/svg/headerCardSilver.svg";
import headerCardBronze from "../../asset/svg/headerCardBronze.svg";
import PackageCard from "../package-card/PackageCard";
import axios from "axios";
import { toast } from "react-toastify";

const BuyTicket = forwardRef((props, ref) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const res = await axios.get(
        `https://bticket.hoseinifinance.com/api/v1/spectator/packages`
      );
      setData(res.data.data);
    } catch (error) {
      toast.error(error.response.data?.message);
    }
  }

  return (
    <div
      ref={ref}
      className={`${Styles.backImg} py-3 d-flex flex-column align-items-center  py-5 position-relative`}
      style={{ minHeight: "622px" }}
      id={"buyticket"}
    >

      <div className="container position-relative">
        <div className="d-flex justify-content-center mb-5 ">
          <h2 className="position-relative mt-5">
            <div className={`${Styles.posdotsImgTitle} d-none d-lg-flex`}>
              <img src={svgTitle} alt="" />
            </div>{" "}
            <span className="position-relative">خرید</span>
            <span className={Styles.colorText}> بلیط</span>
            <div className={Styles.svgToolTipTittle}>
              <img src={svgToolTipTitle} alt="" />
            </div>
          </h2>
        </div>
        <div className="w-100">
          <Row>
            {data.map((item, i) => {
              return (
                <Col
                  className="d-flex justify-content-center mb-3"
                  xs={12}
                  lg={3}
                  key={i}
                >
                  <PackageCard data={item} />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
});

export default BuyTicket;
