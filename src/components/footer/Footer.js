import React from "react";

import Styles from "./Footer.module.scss";
import logo from "../../asset/img/logo.png";

import telegram from "../../asset/svg/social/Frame-1.svg";
import twitter from "../../asset/svg/social/Frame-2.svg";
import linkedin from "../../asset/svg/social/Frame-3.svg";
import facebook from "../../asset/svg/social/Frame-4.svg";
import instagram from "../../asset/svg/social/Frame-5.svg";
import youtube from "../../asset/svg/social/Frame.svg";
import { AiOutlineClockCircle, AiOutlinePhone } from "react-icons/ai";

const social = [
  {
    href: "https://www.instagram.com/accounts/login/?next=/hoseini.finance/",
    icon: instagram,
  },
  {
    href: "https://www.facebook.com/profile.php?id=100044545416431",
    icon: facebook,
  },
  {
    href: "https://www.linkedin.com/in/hoseini-finance-76212a199",
    icon: linkedin,
  },
  { href: "https://twitter.com/hoseini_finance", icon: twitter },
  { href: "https://t.me/hoseinifinance_com", icon: telegram },
  {
    href: "https://www.youtube.com/channel/UCNNKsKUBWXvLxxMmqREzskA",
    icon: youtube,
  },
];

const Footer = () => {
  return (
    <div className={`${Styles.footer}`}>
      <div className="center-content flex-column">
        <img src={logo} alt="hoseini-finance" />
        <div className="center-content mt-4">
          {social.map((item, index) => (
            <a href={item.href} className="px-3" target={"_blank"}>
              <img src={item.icon} alt={item.icon} />
            </a>
          ))}
        </div>
        <div className="size-4 text-gray-3 mt-4">
          <AiOutlinePhone className="ms-2" size={25}/>
          پشتیبانی :  ۹۱۳۱۸۰۸۰-۰۲۱ داخلی 1
        </div>
        <div className="size-5 text-gray-3 mt-4">
          کپی رایت | تمامی حقوق برای حسینی فایننس محفوظ است.
        </div>
      </div>
    </div>
  );
};

export default Footer;
