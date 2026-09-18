import { useState } from "react";
import users from "../data/users";
import ModalSystem1 from "./ModalSystem1";

// Badge visual para los estados: Active, Pending, Inactive.
function StatusBadge({ status }) {
  const styles = {
    Active: {
      background: "#dcfce7",
      color: "#166534",
    },
    Pending: {
      background: "#fef3c7",
      color: "#92400e",
    },
    Inactive: {
      background: "#f3f4f6",
      color: "#4b5563",
    },
  };

  return (
    <span
      style={{
        ...styles[status],
        padding: "6px 10px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: "700",
      }}
    >
      {status}
    </span>
  );
}

// Fila individual. Ya no maneja selección, solo hover + click para abrir el modal.
function UserRow({ name, role, status, lastVisit, onOpenModal }) {
  return (
    <tr
      style={{
        background: "#fff",
        transition: "all .2s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#f9fafb";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#fff";
      }}
      onClick={onOpenModal}
    >
      <td style={{ padding: "16px", borderBottom: "1px solid #eee" }}>
        <strong>{name}</strong>
      </td>

      <td
        style={{
          padding: "16px",
          borderBottom: "1px solid #eee",
          color: "#666",
        }}
      >
        {role}
      </td>

      <td style={{ padding: "16px", borderBottom: "1px solid #eee" }}>
        <StatusBadge status={status} />
      </td>

      <td
        style={{
          padding: "16px",
          borderBottom: "1px solid #eee",
          color: "#666",
        }}
      >
        {lastVisit}
      </td>
    </tr>
  );
}

export default function UserTableModal() {
  // Estado del modal.
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePatient, setActivePatient] = useState(null);

  function handleOpenModal(user) {
    setActivePatient(user);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setActivePatient(null);
  }

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        overflow: "hidden",
      }}
    >
      {/* Header superior del componente */}
      <div
        style={{
          padding: "20px",
          borderBottom: "1px solid #eee",
        }}
      >
        <h3 style={{ margin: 0 }}>Patients Overview</h3>
        <p style={{ margin: "6px 0 0", color: "#666" }}>
          Click any row to open the patient details modal.
        </p>
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr
            style={{
              background: "#f3f4f6",
              textAlign: "left",
            }}
          >
            <th
              style={{ padding: "14px 16px", fontSize: "13px", color: "#666" }}
            >
              Name
            </th>
            <th
              style={{ padding: "14px 16px", fontSize: "13px", color: "#666" }}
            >
              Role
            </th>
            <th
              style={{ padding: "14px 16px", fontSize: "13px", color: "#666" }}
            >
              Status
            </th>
            <th
              style={{ padding: "14px 16px", fontSize: "13px", color: "#666" }}
            >
              Last Visit
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <UserRow
              key={user.name}
              {...user}
              onOpenModal={() => handleOpenModal(user)}
            />
          ))}
        </tbody>
      </table>

      <ModalSystem1
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        patient={activePatient}
      />
    </div>
  );
}
