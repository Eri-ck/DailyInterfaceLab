import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InviteTeammateForm from "./InviteTeammateForm";

test("shows an error for an invalid email", async () => {
  const user = userEvent.setup();
  render(<InviteTeammateForm />);

  await user.type(screen.getByLabelText("Email"), "not-an-email");
  await user.click(screen.getByText("Send invite"));

  expect(screen.getByRole("alert")).toHaveTextContent("valid email");
});

test("calls onInvite with email and selected role", async () => {
  const handleInvite = jest.fn();
  const user = userEvent.setup();
  render(<InviteTeammateForm onInvite={handleInvite} />);

  await user.type(screen.getByLabelText("Email"), "teammate@example.com");
  await user.selectOptions(screen.getByLabelText("Role"), "admin");
  await user.click(screen.getByText("Send invite"));

  expect(handleInvite).toHaveBeenCalledWith({
    email: "teammate@example.com",
    role: "admin",
  });
});