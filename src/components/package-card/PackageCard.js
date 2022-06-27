import Styles from "./PackageCard.module.scss";
import headercardPlatine from "../../asset/svg/headerCardPlatine.svg";
import headerCardGold from "../../asset/svg/headerCardGold.svg";
import headerCardSilver from "../../asset/svg/headerCardSilver.svg";
import headerCardBronze from "../../asset/svg/headerCardBronze.svg";
import { useNavigate } from "react-router-dom";
import { BsFillStarFill } from "react-icons/bs";

const data_types = {
  PLATINUM: {
    header: headercardPlatine,
    row: "ردیف 2 الی 4",
    totalCapacity: 129,
    card_stars: Array.from({ length: 5 }, (_, i) => (
      <BsFillStarFill
        className="text-gray-1 mx-1 PLATINUM opacity7"
        size={30}
      />
    )),
  },
  GOLD: {
    header: headerCardGold,
    row: "ردیف 5 الی 12",
    totalCapacity: 405,
    card_stars: Array.from({ length: 4 }, (_, i) => (
      <BsFillStarFill className="text-gray-1 mx-1 GOLD opacity7" size={30} />
    )),
  },
  SILVER: {
    header: headerCardSilver,
    row: "ردیف 13 الی 24",
    totalCapacity: 540,
    card_stars: Array.from({ length: 3 }, (_, i) => (
      <BsFillStarFill className="text-gray-1 mx-1 SILVER opacity7" size={30} />
    )),
  },
  BRONZE: {
    header: headerCardBronze,
    row: "بالکن",
    totalCapacity: 400,
    card_stars: Array.from({ length: 2 }, (_, i) => (
      <BsFillStarFill className="text-gray-1 mx-1 BRONZE opacity7" size={30} />
    )),
  },
};

const ConvertToArabicNumbers = (num) => {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return num.toString().replace(/\d/g, (x) => farsiDigits[x]);
};

const detectColor = (total, free) => {
  const one_part = total / 4;
  const tow_part = (total / 4) * 2;
  const tree_part = (total / 4) * 3;

  const color =
    free > tree_part
      ? "text-success"
      : free > tow_part
      ? "text-link"
      : free > one_part
      ? "text-warning"
      : "text-danger";
  return color;
};

export default function PackageCard({ data }) {
  const navigate = useNavigate();

  return (
    <div className={Styles.BuyTitleBox}>
      <div className={`${Styles.hederBox} ${Styles[data?.type]} `}>
        <div className={`${Styles.posStars}  center-content p-2`}>
          {data_types[data?.type].card_stars}
        </div>
        <img src={data_types[data.type].header} alt="" />
      </div>
      <div
        className={`${Styles.innerCard} w-100 p-3 d-flex flex-column justify-content-between`}
      >
        <div>
          <div className="mb-4 fw-700 size-3 text-center">
            <h4>پکیج {data.title}</h4>
          </div>
          <p className={Styles.colorGray}>{data.location}</p>
          <div className="mb-3">
            <p className=" text-center text-gray-3">
              ظرفیت
              <span
                className={`mx-2 ${detectColor(
                  data_types[data.type].totalCapacity,
                  data.capacity
                )}`}
              >
                {ConvertToArabicNumbers(data.capacity)}
              </span>
              باقی مانده از
              <span className="mx-2 fw-700 text-gray-4">
                {ConvertToArabicNumbers(data_types[data.type].totalCapacity)}
              </span>
            </p>
          </div>
        </div>
        <div>
          {data.offPrice ? (
            <div className="mb-2 text-center size-5 text-gray-2">
              <p className={Styles.PriceText}>
                <span className={Styles.LinePrice}></span>
                {ConvertToArabicNumbers(
                  Number(data.price).toLocaleString()
                )}{" "}
                تومان
              </p>
            </div>
          ) : null}
          <div className="mb-4 text-gray-4 fw-500 size-4 text-center">
            <h4>
              {data.offPrice
                ? ConvertToArabicNumbers(Number(data.offPrice).toLocaleString())
                : ConvertToArabicNumbers(
                    Number(data.price).toLocaleString()
                  )}{" "}
              تومان
            </h4>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className={`${Styles.btnBuy} pointer`}
              onClick={(e) => {
                localStorage.setItem("packageType", data.type);
                navigate("/buy");
              }}
            >
              انتخاب
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
