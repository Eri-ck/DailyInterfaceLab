import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AccessibleProgressBar from "./AccessibleProgressBar";

test("starts at the initial value with correct ARIA bounds", () => {
  render(<AccessibleProgressBar />);
  const bar = screen.getByRole("progressbar");

  expect(bar).toHaveAttribute("aria-valuenow", "30");
  expect(bar).toHaveAttribute("aria-valuemin", "0");
  expect(bar).toHaveAttribute("aria-valuemax", "100");
});

test("aria-valuenow updates when progress changes", async () => {
  const user = userEvent.setup();
  render(<AccessibleProgressBar />);

  await user.click(screen.getByText("+10"));

  expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "40");
});