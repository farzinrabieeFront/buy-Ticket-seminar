import axios from "axios";
import Styles from "./Tickets.module.scss";
import React, { memo, useCallback, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Ticket from "../../components/ticket/Ticket";
import PLATINUMStars from "../../asset/svg/PLATINUM-star.svg";
import GOLDStars from "../../asset/svg/GOLD-star.svg";
import SILVERStars from "../../asset/svg/SILVER-star.svg";
import BRONZEStars from "../../asset/svg/BRONZE-star.svg";
import { BsCalendarDate } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AiOutlineClockCircle, AiOutlinePhone } from "react-icons/ai";
import logo from "../../asset/img/logo.png";
import { toast } from "react-toastify";
import { BiChevronLeft } from "react-icons/bi";

const data_types = {
  PLATINUM: {
    stars: PLATINUMStars,
    title: "پکیج پلاتینی",
  },
  GOLD: {
    stars: GOLDStars,
    title: "پکیج طلایی",
  },
  SILVER: {
    stars: SILVERStars,
    title: "پکیج نقره ای",
  },
  BRONZE: {
    stars: BRONZEStars,
    title: "پکیج برنزی",
  },
};

function Tickets() {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(search);
  const paramAuthority = query.get("Authority");
  const paramStatus = query.get("Status");
  const [type, setType] = useState("");

  useEffect(() => {
    if (!paramAuthority) navigate("/");
    if (localStorage.getItem("packageType")) {
      setType(localStorage.getItem("packageType"));
    }
    if (paramStatus === "OK") {
      getData();
    } else if (paramStatus === "NOK") {
      toast.error("پرداخت ناموفق");
      navigate("/buy");
    }
  }, []);

  const getData = useCallback(async function () {
    try {
      const res = await axios.post(
        `https://bticket.hoseinifinance.com/api/v1/spectator/verify/payment`,
        { authority: paramAuthority }
      );
      setData(res.data.data.tickets);
      localStorage.setItem("tickets", JSON.stringify([]));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }, []);

  const handleClickback = () => {
    navigate("/");
  };

  return (
    <div className={`${Styles.ticketsPage} ${Styles[type]}`}>
      <Row className="justify-content-center">
        <h6
          className="text-gray-2 pointer d-flex justify-content-end pt-5 ps-5"
          onClick={handleClickback}
        >
          بازگشت به صفحه اصلی
          <BiChevronLeft />
        </h6>
        <Col xs={8} className="center-content mt-4">
          <div className={`${Styles.starsWidth} d-flex flex-column mb-5`}>
            <img src={data_types[type]?.stars} />
            <div
              className={`${Styles.textTitle} text-center text-gray-5 fw-700`}
            >
              {data_types[type]?.title}
            </div>
            <div
              className="text-center text-gray-3 fw-500 my-4"
              style={{ fontSize: "32px" }}
            >
              بلیط ها
            </div>
          </div>
        </Col>
        <div id="test"></div>
        {data.map((item, i) => (
          <Col xs={11} md={10} className="center-content mt-3" key={i}>
            <Ticket data={item} ticketNum={i + 1} />
          </Col>
        ))}
      </Row>
      <div className="footer">
        <div className="container" style={{ borderTop: "1px solid #D9E0E9" }}>
          <Row className="mt-5">
            <Col lg={3} className="text-center text-gray-4">
              <p>
                <BsCalendarDate className="ms-2" />
                ۲۶ و ۲۷ خرداد
              </p>
            </Col>
            <Col lg={3} className="text-center text-gray-4">
              <p>
                <GoLocation className="ms-2" />
                سالن همایش های برج میلاد تهران
              </p>
            </Col>
            <Col lg={3} className="text-center text-gray-4">
              <p>
                <AiOutlineClockCircle className="ms-2" />
                ساعت پذیرش : ۷:۰۰ صبح
              </p>
            </Col>
            <Col lg={3} className="text-center text-gray-4">
              <p>
                <AiOutlinePhone className="ms-2" />
                پشتیبانی : ۹۱۳۱۸۰۸۰-۰۲۱ داخلی 1
              </p>
            </Col>
            <Col lg={12} className="my-5">
              <div className="d-flex justify-content-center">
                <img src={logo} alt="hoseini-finance" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default memo(Tickets);
