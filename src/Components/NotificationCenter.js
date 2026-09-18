import { useState } from "react";

const initialNotifications = [
  { id: 1, text: "Maria commented on your design", read: false },
  { id: 2, text: "New task assigned to you", read: false },
  { id: 3, text: "Weekly report is ready", read: true },
  { id: 4, text: "Diego mentioned you in a comment", read: false },
];

export default function NotificationCenter() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;
  const visibleNotifications = showUnreadOnly
    ? notifications.filter((n) => !n.read)
    : notifications;

  function markAsRead(id) {
    setNotifications((current) =>
      current.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  }

  function markAllAsRead() {
    setNotifications((current) => current.map((n) => ({ ...n, read: true })));
  }

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
        maxWidth: "420px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <h3 style={{ margin: 0 }}>
          Notifications {unreadCount > 0 && `(${unreadCount})`}
        </h3>
        <button
          onClick={markAllAsRead}
          style={{
            background: "transparent",
            border: "none",
            color: "#2563eb",
            fontSize: "12px",
            cursor: "pointer",
          }}
        >
          Mark all as read
        </button>
      </div>

      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "12px",
          color: "#666",
          marginBottom: "16px",
        }}
      >
        <input
          type="checkbox"
          checked={showUnreadOnly}
          onChange={(e) => setShowUnreadOnly(e.target.checked)}
        />
        Show unread only
      </label>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {visibleNotifications.map((notification) => (
          <div
            key={notification.id}
            onClick={() => markAsRead(notification.id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 12px",
              borderRadius: "10px",
              background: notification.read ? "#fff" : "#eff6ff",
              cursor: "pointer",
              fontSize: "13px",
            }}
          >
            {!notification.read && (
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "999px",
                  background: "#2563eb",
                  flexShrink: 0,
                }}
              />
            )}
            <span style={{ color: notification.read ? "#999" : "#111" }}>
              {notification.text}
            </span>
          </div>
        ))}
        {visibleNotifications.length === 0 && (
          <p style={{ color: "#999", fontSize: "13px", margin: 0 }}>
            Nothing to show.
          </p>
        )}
      </div>
    </div>
  );
}
