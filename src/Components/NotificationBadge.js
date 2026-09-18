import { useState } from "react";

function ConfirmDialog({ isOpen, title, message, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onCancel}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: "16px",
          padding: "28px",
          maxWidth: "360px",
          width: "90%",
          textAlign: "center",
        }}
      >
        <h3 style={{ margin: "0 0 8px" }}>{title}</h3>
        <p style={{ margin: "0 0 24px", color: "#666", fontSize: "14px" }}>
          {message}
        </p>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={onCancel}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              background: "#fff",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "10px",
              border: "none",
              background: "#dc2626",
              color: "#fff",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ConfirmationModal() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [lastAction, setLastAction] = useState(null);

  function handleConfirm() {
    setLastAction("deleted");
    setIsDialogOpen(false);
  }

  function handleCancel() {
    setLastAction("cancelled");
    setIsDialogOpen(false);
  }

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
      }}
    >
      <button
        onClick={() => setIsDialogOpen(true)}
        style={{
          padding: "10px 18px",
          borderRadius: "10px",
          border: "none",
          background: "#dc2626",
          color: "#fff",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Delete account
      </button>

      {lastAction && (
        <p style={{ marginTop: "14px", fontSize: "13px", color: "#666" }}>
          Last action: <strong>{lastAction}</strong>
        </p>
      )}

      <ConfirmDialog
        isOpen={isDialogOpen}
        title="Delete this account?"
        message="This action can't be undone. All your data will be permanently removed."
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
}
