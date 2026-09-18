import { render, screen, fireEvent } from "@testing-library/react";
import StepperInput from "./StepperInput";

test("does not go below min", () => {
  render(<StepperInput min={0} max={3} />);
  const decrease = screen.getByLabelText("Decrease");

  fireEvent.click(decrease);
  expect(screen.getByTestId("stepper-value")).toHaveTextContent("0");
  expect(decrease).toBeDisabled();
});

test("does not go above max", () => {
  render(<StepperInput min={0} max={2} />);
  const increase = screen.getByLabelText("Increase");

  fireEvent.click(increase);
  fireEvent.click(increase);
  expect(screen.getByTestId("stepper-value")).toHaveTextContent("2");
  expect(increase).toBeDisabled();
});