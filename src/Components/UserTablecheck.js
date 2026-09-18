import { useState } from "react";
import users from "../data/users";

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

// Una fila individual.
// Recibe datos + si está seleccionada + función para seleccionarla.
function UserRow({ name, role, status, lastVisit, selected, onSelect }) {
  return (
    <tr
      style={{
        // Azul suave cuando está seleccionada.
        background: selected ? "#eef2ff" : "#fff",
        transition: "all .2s ease",
        cursor: "pointer",
      }}
      // Hover de fila.
      onMouseEnter={(e) => {
        e.currentTarget.style.background = selected ? "#eef2ff" : "#f9fafb";
      }}
      // Al salir, conserva azul si está seleccionada.
      onMouseLeave={(e) => {
        e.currentTarget.style.background = selected ? "#eef2ff" : "#fff";
      }}
      // Click en toda la fila selecciona/deselecciona.
      onClick={onSelect}
    >
      {/* Checkbox */}
      <td style={{ padding: "16px", borderBottom: "1px solid #eee" }}>
        <input
          type="checkbox"
          checked={selected}
          onChange={onSelect}
          onClick={(e) => e.stopPropagation()}
        />
      </td>

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

export default function UserTable() {
  // Estado local: guarda los usuarios seleccionados.
  const [selectedUsers, setSelectedUsers] = useState([]);

  // Agrega o quita usuarios del array selectedUsers.
  function toggleUser(name) {
    setSelectedUsers((current) =>
      current.includes(name)
        ? current.filter((userName) => userName !== name)
        : [...current, name]
    );
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
        <h3 style={{ margin: 0 }}>Users Overview</h3>
        <p style={{ margin: "6px 0 0", color: "#666" }}>
          Basic table with reusable rows, status badges, hover states and
          selectable rows.
        </p>
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          {/* Header de tabla más oscuro para diferenciarlo del selected row */}
          <tr
            style={{
              background: "#f3f4f6",
              textAlign: "left",
            }}
          >
            <th
              style={{
                padding: "14px 16px",
                fontSize: "13px",
                color: "#666",
              }}
            >
              Select
            </th>

            <th
              style={{
                padding: "14px 16px",
                fontSize: "13px",
                color: "#666",
              }}
            >
              Name
            </th>

            <th
              style={{
                padding: "14px 16px",
                fontSize: "13px",
                color: "#666",
              }}
            >
              Role
            </th>

            <th
              style={{
                padding: "14px 16px",
                fontSize: "13px",
                color: "#666",
              }}
            >
              Status
            </th>

            <th
              style={{
                padding: "14px 16px",
                fontSize: "13px",
                color: "#666",
              }}
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
              selected={selectedUsers.includes(user.name)}
              onSelect={() => toggleUser(user.name)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
