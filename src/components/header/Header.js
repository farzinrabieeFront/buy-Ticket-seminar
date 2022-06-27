import React from "react";

import Styles from "./Header.module.scss";
import { BiTimeFive } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div className={`${Styles.header} `}>
      <div className="container-lg">
        <div className="text-white text-center">
          <h2 className={`fw-800`}>درآمد بدون مرز</h2>
          <h3 className={` fw-800 size-0 fw-500`}>
            همایش بزرگ آینده بازارهای مالی، ارزهای دیجیتال، معامله گری و
            روانشناسی پول
          </h3>
        </div>
        <div className="d-flex flex-column align-items-center mt-5 text-white fw-500">
          <span className="mb-2">
            <BiTimeFive size="20" className="ms-2" />
            ۲۶ و ۲۷ خرداد
          </span>
          <span>
            <IoLocationOutline size="20" className="ms-2" />
            سالن همایش های برج میلاد تهران
          </span>

          <Nav.Link
            className={`${Styles.btn} size-3 mt-3 fw-500 ms-lg-2`}
            href={"#buyticket"}
          >
            خرید بلیط
          </Nav.Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
