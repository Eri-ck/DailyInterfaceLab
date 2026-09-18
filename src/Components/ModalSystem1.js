import React from "react";

function ModalSystem1({ isOpen, onClose, patient }) {
  // Doble guarda: no se abre si isOpen es false,
  // ni si por alguna razón patient todavía es null.
  if (!isOpen || !patient) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 style={styles.title}>Patient Details</h2>

        <div style={styles.content}>
          <p style={styles.name}>{patient.name}</p>
          <p style={styles.visit}>Last visit: {patient.lastVisit}</p>
        </div>

        <button style={styles.button} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    minWidth: "320px",
    textAlign: "center",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
  },
  title: {
    marginBottom: "20px",
    fontSize: "20px",
  },
  content: {
    marginBottom: "25px",
  },
  name: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "5px 0",
  },
  visit: {
    color: "#666",
    margin: "5px 0",
  },
  button: {
    padding: "8px 20px",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ModalSystem1;
