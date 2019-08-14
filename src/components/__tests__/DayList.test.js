import React from "react";

import { render, cleanup } from "@testing-library/react";

import DayList from "components/DayList";
import { days } from "testData";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<DayList days={[days]} />);
});
