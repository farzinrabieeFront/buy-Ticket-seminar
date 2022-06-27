/**internal imports */
import { memo, useState } from "react";
import Styles from "./NewInput.module.scss";
import { amountFilter } from "./inputFilters";
/**extenal imports */
import PropTypes from "prop-types";
import classNames from "classnames";
import { Form } from "react-bootstrap";
import { useField } from "formik";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { RiErrorWarningLine } from "react-icons/ri";
// import { IoMdEyeOff, IoMdEye, RiErrorWarningLine } from "react-icons/all";

const NewInput = ({
  label,
  placeholder,
  isValid,
  isInvalid,
  type,
  autocomplete,
  unit,
  digit,
  disabled,
  inputClassName,
  guide: Guide,
  limit: Limit,
  preIcon,
  symbol,
  onPaste,
  onKeyDown,
  ...props
}) => {
  const [
    { name, value, onChange, ...field },
    { error, touched },
    { setValue },
  ] = useField(props);

  const [isShowPass, setIsShowPass] = useState(false);

  const keyPressHandler = (evt) => {
    if (digit) amountFilter(evt);
  };

  function Convertnumber2english(str) {
    str = str.replace('۰', '0');
    str = str.replace('۱', '1');
    str = str.replace('۲', '2');
    str = str.replace('۳', '3');
    str = str.replace('۴', '4');
    str = str.replace('۵', '5');
    str = str.replace('۶', '6');
    str = str.replace('۷', '7');
    str = str.replace('۸', '8');
    str = str.replace('۹', '9');

    return str;
  }

  const pasteHandler = (evt) => {
    let clipboardData, pastedData;
    evt.stopPropagation(); //546532.65241dddd

    clipboardData = evt.clipboardData || window.clipboardData;
    pastedData = clipboardData.getData("Text");
    if (digit) {
      if (!new RegExp(/^[\d.]+$/, "g").test(pastedData)) {
        evt.preventDefault();
      }
      if (unit === "IRT") {
        if (!new RegExp(/^[\d]+$/, "g").test(pastedData)) {
          evt.preventDefault();
          setValue(pastedData.split(".")[0]);
        }
      }
    }

    onPaste();
  };

  const keyDownHandler = (evt) => {
    let ASCIICode = evt.which ? evt.which : evt.keyCode;

    if (unit === "IRT") {
      if (ASCIICode === 110 || ASCIICode === 190) {
        evt.preventDefault();
      }
    }

    onKeyDown();
  };

  const preIconPadding = Styles.preIconPadding;
  let inputClasses = classNames(inputClassName, { preIconPadding: false });
  const input = (
    <Form.Control
      {...field}
      {...props}
      type={type === "password" ? (isShowPass ? "text" : "password") : type}
      name={name}
      placeholder={placeholder}
      isValid={isValid}
      isInvalid={isInvalid || (error && touched)}
      autoComplete={autocomplete}
      onChange={(e) => setValue(Convertnumber2english(e.target.value))}
      disabled={disabled}
      className={inputClasses}
      value={value}
      onKeyPress={keyPressHandler}
      onPaste={pasteHandler}
      onKeyDown={keyDownHandler}
    />
  );

  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <div
        className={classNames(
          "d-flex",
          "justify-content-between",
          "align-items-center",
          "mb-1",
          "px-2"
        )}
      >
        {label ? (
          <Form.Label className={classNames(Styles.label)} htmlFor={name}>
            {label}
          </Form.Label>
        ) : null}
        {Limit ? Limit : null}
      </div>

      <div className={classNames("position-relative", "mb-4")}>
        <div className={classNames("position-relative")}>
          {input}

          {unit && unit === "IRT" ? (
            <i className={classNames(Styles.unit, "text-gray-2")}>تومان</i>
          ) : (
            <i className={classNames(Styles.unit, "pt-1", "text-gray-1")}>
              {unit}
            </i>
          )}

          {preIcon && (
            <i className={classNames(Styles.preIcon, "text-gray-2")}>
              {preIcon}
            </i>
          )}

          {type !== "password" ? null : isShowPass ? (
            <i
              className={classNames(Styles.passwordIcon, "text-gray-2")}
              onClick={() => setIsShowPass(false)}
            >
              <IoMdEye size={25} />
            </i>
          ) : (
            <i
              className={classNames(Styles.passwordIcon, "text-gray-2")}
              onClick={() => setIsShowPass(true)}
            >
              <IoMdEyeOff size={25} />
            </i>
          )}
        </div>

        {error && touched ? (
          <span className={classNames(Styles.inputErrorText)}>
            <RiErrorWarningLine size="16" /> {error}
          </span>
        ) : Guide ? (
          Guide
        ) : null}
      </div>
    </Form.Group>
  );
};

NewInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  inputClassName: PropTypes.string,
  unit: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  symbol: PropTypes.string,
  autocomplete: PropTypes.oneOf(["off", "on"]),
  isValid: PropTypes.bool,
  isInvalid: PropTypes.bool,
  disabled: PropTypes.bool,
  digit: PropTypes.bool,
  guide: PropTypes.node,
  limit: PropTypes.node,
  preIcon: PropTypes.node,
  onchange: PropTypes.func,
  onBlur: PropTypes.func,
  onPaste: PropTypes.func,
  onKeyDown: PropTypes.func,
};

NewInput.defaultProps = {
  name: "test",
  value: "",
  inputClassName: "",
  type: "text",
  unit: "",
  placeholder: "",
  isValid: false,
  isInvalid: false,
  disabled: false,
  digit: false,
  autocomplete: "off",
  onchange: function (e) {
    console.log(e.target.value);
  },
  onBlur: function () { },
  onPaste: function () { },
  onKeyDown: function () { },
};

export default memo(NewInput);

//as={textArea && "textarea"}
