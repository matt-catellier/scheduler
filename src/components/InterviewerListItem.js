import React from "react";
import classNames from "classnames";

import "components/InterviewerListItem.scss";

const InterviewListItem = ({ name, avatar, selected, setInterviewer }) => {
  return (
    <li
      className={classNames({
        interviewers__item: true,
        "interviewers__item--selected": selected
      })}
      onClick={setInterviewer}
    >
      <img className={"interviewers__item-image"} src={avatar} alt={name} />
      {selected && name}
    </li>
  );
};

export default InterviewListItem;
