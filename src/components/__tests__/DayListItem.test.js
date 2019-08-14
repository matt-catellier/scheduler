import React from "react";

import { render, cleanup } from "@testing-library/react";

import DayListItem from "components/DayListItem";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<DayListItem />);
});

it("renders a day", () => {
  const { getByText } = render(<DayListItem name="Monday" spots={5} />);
  expect(getByText("Monday").parentElement).toHaveClass("day-list__item");
});

it("renders a full day when there are 0 spots", () => {
  const { getByText } = render(<DayListItem name="Monday" spots={0} />);
  expect(getByText("Monday").parentElement).toHaveClass("day-list__item--full");
});

it("renders a selected day when it is selected", () => {
  const { getByText } = render(
    <DayListItem name="Monday" spots={5} selected />
  );
  expect(getByText("Monday").parentElement).toHaveClass(
    "day-list__item--selected"
  );
});

it("renders 'no spots remaining' when there are 0 spots", () => {
  const { getByText } = render(<DayListItem name="Monday" spots={0} />);
  expect(getByText("no spots remaining")).toBeInTheDocument();
});

it("renders '1 spot remaining' when there is 1 spot", () => {
  const { getByText } = render(<DayListItem name="Monday" spots={1} />);
  expect(getByText("1 spot remaining")).toBeInTheDocument();
});

it("renders '5 spots remaining' when there is 5 spots", () => {
  const { getByText } = render(<DayListItem name="Monday" spots={5} />);
  expect(getByText("5 spots remaining")).toBeInTheDocument();
});
