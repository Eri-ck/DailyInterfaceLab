import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SaveStatusIndicator2 from "./SaveStatusIndicator2";

test("shows saved after typing and blurring", async () => {
  const user = userEvent.setup();
  render(<SaveStatusIndicator2 />);

  await user.type(screen.getByRole("textbox"), "Hello world");
  await user.tab();

  await waitFor(() => {
    expect(screen.getByTestId("save-status")).toHaveTextContent("Saved");
  });
});

test("shows an error when saving empty text", async () => {
  const user = userEvent.setup();
  render(<SaveStatusIndicator2 />);

  screen.getByRole("textbox").focus();
  await user.tab();

  await waitFor(() => {
    expect(screen.getByTestId("save-status")).toHaveTextContent(
      "Couldn't save"
    );
  });
});
