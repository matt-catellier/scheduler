import React from "react";
import classNames from "classnames";

import "components/Button.scss";

export default function Button({
  confirm,
  danger,
  onClick,
  disabled,
  children
}) {
  const buttonClass = classNames({
    button: true,
    "button--confirm": confirm,
    "button--danger": danger
  });

  return (
    <button disabled={disabled} className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}
