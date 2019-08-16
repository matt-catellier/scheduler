import React from "react";

export default function Empty({ onAdd }) {
  return (
    <main className="appointment__add">
      <img
        className="appointment_add-button"
        src="images/add.png"
        alt="Add"
        onClick={onAdd}
      />
    </main>
  );
}
