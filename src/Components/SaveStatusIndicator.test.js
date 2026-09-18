import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SaveStatusIndicator from "./SaveStatusIndicator";

test("shows saved after typing and blurring", async () => {
  const user = userEvent.setup();
  render(<SaveStatusIndicator />);

  await user.type(screen.getByRole("textbox"), "Hello world");
  await user.tab();

  await waitFor(() => {
    expect(screen.getByTestId("save-status")).toHaveTextContent("Saved");
  });
});

test("shows an error when saving empty text", async () => {
  const user = userEvent.setup();
  render(<SaveStatusIndicator />);

  screen.getByRole("textbox").focus();
  await user.tab();

  await waitFor(() => {
    expect(screen.getByTestId("save-status")).toHaveTextContent(
      "Couldn't save"
    );
  });
});
