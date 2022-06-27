import React, { useEffect, useMemo, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";
import Styles from "./TicketBuy.module.scss";
import { ImPlus } from "react-icons/im";
import Form from "../form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BtnTicket from "../../components/btnTicket/BtnTicket";
import { BiChevronLeft } from "react-icons/bi";
import PackageCard from "../../components/package-card/PackageCard";
import PLATINUMStars from "../../asset/svg/PLATINUM-star.svg";
import GOLDStars from "../../asset/svg/GOLD-star.svg";
import SILVERStars from "../../asset/svg/SILVER-star.svg";
import BRONZEStars from "../../asset/svg/BRONZE-star.svg";
import userSVG from "../../asset/svg/user-svg.svg";
import usersSVG from "../../asset/svg/users-svg.svg";
import { toast } from 'react-toastify';

const data_types = {
  PLATINUM: {
    stars: PLATINUMStars,
    card_stars: Array.from({ length: 5 }, (_, i) => (
      <BsFillStarFill
        className="text-gray-1 mx-1 PLATINUM opacity7"
        size={30}
      />
    )),
    title: "پکیج پلاتینی",
  },
  GOLD: {
    stars: GOLDStars,
    card_stars: Array.from({ length: 4 }, (_, i) => (
      <BsFillStarFill className="text-gray-1 mx-1 GOLD opacity7" size={30} />
    )),
    title: "پکیج طلایی",
  },
  SILVER: {
    stars: SILVERStars,
    card_stars: Array.from({ length: 3 }, (_, i) => (
      <BsFillStarFill className="text-gray-1 mx-1 SILVER opacity7" size={30} />
    )),
    title: "پکیج نقره ای",
  },
  BRONZE: {
    stars: BRONZEStars,
    card_stars: Array.from({ length: 2 }, (_, i) => (
      <BsFillStarFill className="text-gray-1 mx-1 BRONZE opacity7" size={30} />
    )),
    title: "پکیج برنزی",
  },
};

const ConvertToArabicNumbers = (num) => {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    return num
        .toString()
        .replace(/\d/g, x => farsiDigits[x])
}

const TicketBuy = () => {
    const [list, setList] = useState([]);
    const [show, setShow] = useState(false);
    const [type, setType] = useState("");
    const [dataTickets, setDataTickets] = useState([]);
    const [selectedTicket, setSelectedTicket] = useState({});
    const navigate = useNavigate();
    const [count, setCount] = useState(0);

    useEffect(() => {
        const body = []
        const vals = list.filter(item => Object.keys(item).length)

        for (const item of vals) {
            if (item.fullName && item.phoneNumber && item.email)
                body.push(item)
        }

        setCount(body.length)
    }, [list]);

  useEffect(() => {
    if (localStorage.getItem("packageType")) {
      setType(localStorage.getItem("packageType"));
    } else navigate("/");

    if (localStorage.getItem("tickets")) {
      const tickets_list = JSON.parse(localStorage.getItem("tickets"));
      if (tickets_list.length) {
        setList(tickets_list);
      }
    }
  }, []);

  useEffect(() => {
    console.log('dd');
        handleClose();
        setType(localStorage.getItem("packageType"));
    getData();
  }, [localStorage.getItem("packageType")]);

  async function getData() {
    try {
      const res = await axios.get(
        `https://bticket.hoseinifinance.com/api/v1/spectator/packages`
      );
      setDataTickets(res.data.data);

      for (const item of res.data.data) {
        if (localStorage.getItem("packageType") === item.type)
          setSelectedTicket(item);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  function changeList(data, ind = -1) {
    const tickets = [...list];
    tickets[ind] = data;

    setList(tickets);
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }

  function removeItem(ind) {
    const tickets = [...list];

    const new_list = tickets.filter((_, i) => i !== ind);

    setList(new_list);
  }

  function addForm() {
    setList((prev) => prev.concat([{}]));
  }
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

  async function buyTicket() {
    const body = []
        const vals = list.filter(item => Object.keys(item).length)

        for (const item of vals) {
            if (item.fullName && item.phoneNumber && item.email) {
                if (new RegExp(/^[\u0600-\u06FF\s]+$/, "g").test(item.fullName) &&
                    new RegExp(/(?=.*[0-9]{11})/, "g").test(item.phoneNumber))
                    body.push(item)
            }
        }

    if (body.length) {
      try {
        const res = await axios.post(
          `https://bticket.hoseinifinance.com/api/v1/spectator/buy/ticket`,
          {
            spectators: body,
            packageType: localStorage.getItem("packageType"),
            date: "1401-03-26",
          }
        );
        window.open(res.data.data.paymentUrl, "_self", "noopener,noreferrer");
      } catch (error) {
        toast.error(error.response.data?.message);
      }
    } else {
      toast.error("اطلاعات بلیط ها را وارد کنید");
    }
  }

  const memoizeForms = useMemo(
    () =>
      list.map((item, i) => {
        return (
          <Form
            formNum={i + 1}
            data={item}
            onChange={(vals) => changeList(vals, i)}
            deleteHandler={() => removeItem(i)}
          />
        );
      }),
    [list]
  );

  const handleClickback = () => {
    navigate("/");
  };
  const handleClickModal = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className={`${Styles.buyPage} ${Styles[type]}`}>
      <Row className="justify-content-center">
        <Col xs={11} className="py-5">
          <Row
            classname="d-flex flex-row-reverse mb-3 border"
            style={{ flexDirection: "row-reverse" }}
          >
            <Col lg={4}>
              <h6
                className="text-gray-2 pointer d-flex justify-content-end"
                onClick={handleClickback}
              >
                بازگشت به صفحه اصلی
                <BiChevronLeft />
              </h6>
            </Col>
            <Col lg={4}>
              <div className="d-flex flex-column mb-5">
                <img src={data_types[type]?.stars} />
                <div
                  className="text-center text-gray-5 fw-700"
                  style={{ fontSize: "40px" }}
                >
                  {data_types[type]?.title}
                </div>
              </div>
              <div className="mb-5 " onClick={handleClickModal}>
                <BtnTicket title="تغییر پکیج" gray={true} />
              </div>
              <div>
                <h5 className="text-gray-3 text-center">
                  اطلاعات افراد شرکت کننده را وارد کنید
                </h5>
              </div>
            </Col>
            <Col lg={4}></Col>
          </Row>

          <Row className=" mt-5">
            <Col xs={12} md={12} lg={8} xl={9} className="">
              {memoizeForms}

              <div className={Styles.boxPlus} onClick={addForm}>
                <div className={Styles.icon}>
                  <ImPlus size={35} />
                </div>
                <div className="text-gray-2 mx-2">افزودن شرکت کننده جدید</div>
              </div>
            </Col>

            <Col
              xs={12}
              md={12}
              lg={4}
              xl={3}
              className="d-flex justify-content-center mt-4 mt-md-0"
            >
              <div className={`${Styles.boxTicket} pt-5`}>
                <div className="mb-5">
                  <div className="center-content mb-3">
                    {data_types[type]?.card_stars}
                  </div>
                  <div className="text-center text-gray-5 mb-4 fw-700 is-size-3">
                    {data_types[type]?.title}
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-gray-3 center-content mb-2 fw-500 is-size-5">
                    <img
                      src={userSVG}
                      width={21}
                      height={21}
                      className="ms-2"
                    />
                    قیمت هر بلیط :
                  </div>
                  <div className="text-center text-gray-4 fw-500 is-size-4">
                    {selectedTicket.offPrice
                      ? ConvertToArabicNumbers(
                          Number(selectedTicket.offPrice).toLocaleString()
                        )
                      : ConvertToArabicNumbers(
                          Number(selectedTicket.price).toLocaleString()
                        ) || 0}
                    <span className="me-1">تومان</span>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="text-gray-3 center-content mb-2 fw-500 is-size-5">
                    <img
                      src={usersSVG}
                      width={26}
                      height={21}
                      className="ms-2"
                    />
                    قیمت کل:{" "}
                  </div>
                  <div className="text-center text-gray-4 fw-500 is-size-4">
                    {selectedTicket.offPrice
                      ? ConvertToArabicNumbers(
                          Number(
                            selectedTicket.offPrice * count
                          ).toLocaleString()
                        )
                      : ConvertToArabicNumbers(
                          Number(selectedTicket.price * count).toLocaleString()
                        ) || 0}
                    <span className="me-1">تومان</span>
                  </div>
                </div>
                <BtnTicket onClick={buyTicket} title={"پرداخت"} />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {show ? (
        <Modal
          style={{ maxWidth: "100%" }}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          contentClassName={Styles.modal}
          dialogClassName={Styles.dialogModal}
          show={show}
          onHide={handleClose}
        className="d-flex justify-content-center align-items-start">
          <Modal.Header closeButton className={Styles.titleModal}>
            <Modal.Title>تغییر پکیج</Modal.Title>
          </Modal.Header>
          <Modal.Body className={`${Styles.bodyModal}`}>
            <Row >
              {dataTickets.map((item, i) => {
                return item.type !== localStorage.getItem("packageType") ? (
                  <Col
                    xs={12}
                    md={4}
                    className=" d-flex justify-content-center mb-3"
                    key={i}
                  >
                    <PackageCard data={item} />
                  </Col>
                ) : null;
              })}
            </Row>
          </Modal.Body>
        </Modal>
      ) : null}
    </div>
  );
};

export default TicketBuy;
