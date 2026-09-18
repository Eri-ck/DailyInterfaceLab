import { useState } from "react";

// Day 97 - the week's full user-flow test target. Different scenario
// than a login/validation form: invite flow with a role select, not
// just email/password.
export default function InviteTeammateForm({ onInvite = () => {} }) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("member");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Enter a valid email.");
      return;
    }
    setError("");
    onInvite({ email, role });
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "280px" }}>
      <label
        htmlFor="invite-email"
        style={{ display: "block", fontSize: "13px", marginBottom: "4px" }}
      >
        Email
      </label>
      <input
        id="invite-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          boxSizing: "border-box",
        }}
      />

      <label
        htmlFor="invite-role"
        style={{ display: "block", fontSize: "13px", marginBottom: "4px" }}
      >
        Role
      </label>
      <select
        id="invite-role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      >
        <option value="member">Member</option>
        <option value="admin">Admin</option>
      </select>

      {error && (
        <p
          role="alert"
          style={{ color: "#c00", fontSize: "13px", margin: "0 0 10px" }}
        >
          {error}
        </p>
      )}

      <button type="submit">Send invite</button>
    </form>
  );
}
