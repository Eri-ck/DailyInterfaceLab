import { useState } from "react";

export default function GithubProfileLookup() {
  const [username, setUsername] = useState("torvalds");
  const [profile, setProfile] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  function searchUser(name) {
    if (!name.trim()) return;
    setStatus("loading");

    fetch(`https://api.github.com/users/${name}`)
      .then((res) => {
        if (!res.ok) throw new Error("User not found");
        return res.json();
      })
      .then((data) => {
        setProfile(data);
        setStatus("success");
      })
      .catch(() => {
        setProfile(null);
        setStatus("error");
      });
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
      <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchUser(username)}
          placeholder="GitHub username"
          style={{
            flex: 1,
            padding: "10px 14px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            fontSize: "14px",
          }}
        />
        <button
          onClick={() => searchUser(username)}
          style={{
            padding: "10px 18px",
            borderRadius: "10px",
            border: "none",
            background: "#111",
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>

      {status === "loading" && (
        <p style={{ color: "#999", fontSize: "13px" }}>Loading...</p>
      )}
      {status === "error" && (
        <p style={{ color: "#dc2626", fontSize: "13px" }}>User not found.</p>
      )}

      {status === "success" && profile && (
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <img
            src={profile.avatar_url}
            alt={profile.login}
            style={{ width: "64px", height: "64px", borderRadius: "999px" }}
          />
          <div>
            <p style={{ margin: "0 0 2px", fontWeight: 700, fontSize: "15px" }}>
              {profile.name || profile.login}
            </p>
            <p style={{ margin: "0 0 8px", color: "#999", fontSize: "13px" }}>
              @{profile.login}
            </p>
            <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>
              {profile.public_repos} repos · {profile.followers} followers
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
