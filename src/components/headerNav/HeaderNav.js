import React, { useState } from "react";

import Styles from "./HeaderNav.module.scss";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";

const navItems = [
  { name: "موضوعات اصلی", href: "mainSubject" },
  { name: "چی بدست میاریم؟", href: "achived" },
  { name: "مدرسان", href: "teachers" },
  { name: "کنداکتور", href: "conductor" },
  { name: "خرید بلیط", href: "buyticket" },
  { name: "مشاوره", href: "consulting" },
];

const HeaderNav = ({ scrollY, executeScroll, activeSection }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`${scrollY ? Styles.onScrollHeader : ""} ${
        Styles.headerNav
      } d-flex align-items-center justify-content-between px-4`}
    >
      <div className="d-flex d-lg-none align-items-center justify-content-center">
        <button
          className={`${Styles.btnHamburger} me-4`}
          onClick={() => setShow(true)}
        >
          <GiHamburgerMenu />
        </button>
        <Offcanvas
          placement={"end"}
          show={show}
          onHide={() => setShow(false)}
          id={"responsive-navbar-nav"}
          className="w-50"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {navItems.map((item, index) => (
              <div
                className={`text-${
                  activeSection === index ? "green-1" : "gray-5"
                } size-3 fw-500 ms-lg-2 pointer p-2`}
                onClick={() => {
                  executeScroll(index);
                  setTimeout(() => {
                    setShow(false);
                  }, 500);
                }}
              >
                {item.name}
              </div>
            ))}
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      <div className="d-lg-none">#IncomeWB2022</div>

      <Navbar
        className={`container-lg d-none d-lg-flex justify-content-between`}
      >
        <Nav className="">
          {navItems.map((item, index) => (
            <div
              className={`${
                activeSection === index ? "text-green-1" : ""
              } size-3 fw-500 ms-lg-2 px-2 pointer`}
              onClick={() => {
                executeScroll(index);
              }}
            >
              {item.name}
            </div>
          ))}
        </Nav>
        <div className="">#IncomeWB2022</div>
      </Navbar>
    </div>
  );
};

export default HeaderNav;
