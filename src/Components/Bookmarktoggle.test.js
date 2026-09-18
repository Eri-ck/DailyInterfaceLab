import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookmarkToggle from "./BookmarkToggle";

test("starts unsaved", () => {
  render(<BookmarkToggle />);
  expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "false");
});

test("toggles to saved on click", async () => {
  const user = userEvent.setup();
  render(<BookmarkToggle />);

  await user.click(screen.getByRole("button"));

  expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "true");
  expect(screen.getByText("★ Saved")).toBeInTheDocument();
});