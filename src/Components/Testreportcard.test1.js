import { render, screen } from "@testing-library/react";
import TestReportCard1 from "./TestReportCard1";

test("renders the total test count", () => {
  render(<TestReportCard1 />);
  expect(
    screen.getByText("12 tests total across 6 components.")
  ).toBeInTheDocument();
});

test("lists every tested component", () => {
  render(<TestReportCard1 />);
  [
    "BookmarkToggle",
    "StepperInput",
    "SaveStatusIndicator2",
    "AccessibleProgressBar",
    "useDebouncedValue",
    "InviteTeammateForm",
  ].forEach((name) => {
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
