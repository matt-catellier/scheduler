import React from "react";
import classNames from "classnames";

import "components/DayListItem.scss";

export default ({ name, spots, selected, setDay, children }) => {
  const itemClasses = classNames({
    "day-list__item": true,
    "day-list__item--selected": selected,
    "day-list__item--full": spots === 0
  });

  const spotsText =
    spots > 0
      ? `${spots} spot${spots > 1 ? "s" : ""} remaining`
      : "no spots remaining";

  return (
    <div onClick={() => setDay(name)} className={itemClasses}>
      <h1>{name}</h1>
      <span>{spotsText}</span>
    </div>
  );
};
