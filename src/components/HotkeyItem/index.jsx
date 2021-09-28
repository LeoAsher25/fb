import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./HotkeyItem.scss";

const HotkeyItem = (props) => {
  const { hotkey, style } = props;

  const hotkeyTitleRed = useRef(null);
  const radioRef = useRef(null);

  const handleHotkeyTitleonMouseEnter = () => {
    hotkeyTitleRed.current.style.transitionDelay = "0.3s";
    hotkeyTitleRed.current.style.opacity = 0.78;
  };

  const handleHotkeyTitleonMouseLeave = () => {
    hotkeyTitleRed.current.style.transitionDelay = "0.1s";
    hotkeyTitleRed.current.style.opacity = 0;
  };
  let location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    radioRef.current.checked = false;

    if (hotkey.linkTo.trim() === pathname.trim()) {
      radioRef.current.checked = true;
    } else if (pathname.trim() === "/" && hotkey.link === "/") {
      radioRef.current.checked = true;
    }
  }, [hotkey.linkTo, location]);

  return (
    <li className="hotkeys-item">
      <input
        ref={radioRef}
        hidden
        type="radio"
        name="hotkeyCheckRadio"
        id={"hotkey-check-radio-" + hotkey.title}
      />
      <label htmlFor={"hotkey-check-radio-" + hotkey.title}>
        <Link
          to={hotkey.linkTo}
          className="hotkeys-link"
          onMouseLeave={() => handleHotkeyTitleonMouseLeave()}
          onMouseEnter={() => handleHotkeyTitleonMouseEnter()}
        >
          <div
            className="bg-hotkey-item"
            style={{ backgroundColor: style.upPostInputBox }}
          ></div>

          <div className="hotkeys-icon">
            {hotkey.iconR}
            {hotkey.iconS}
          </div>
        </Link>
      </label>
      <span
        ref={hotkeyTitleRed}
        className="hotkey-item-title"
        style={{ backgroundColor: style.color, color: style.bodyBgColor }}
      >
        {hotkey.title}
      </span>
    </li>
  );
};

export default HotkeyItem;
