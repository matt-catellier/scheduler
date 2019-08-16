import React from "react";

export default function Header({ time }) {
  return (
    <header className="appointment__time">
      <h4 className="test--semi-bold">{time}</h4>
      <hr className="appointment__seperator" />
    </header>
  );
}
