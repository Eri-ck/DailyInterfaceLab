import { useState, useEffect } from "react";

export default function RandomDogFetcher() {
  const [imageUrl, setImageUrl] = useState(null);
  const [status, setStatus] = useState("loading");

  function fetchDog() {
    setStatus("loading");
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch dog");
        return res.json();
      })
      .then((data) => {
        setImageUrl(data.message);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "20px",
        maxWidth: "320px",
      }}
    >
      <div
        style={{
          height: "220px",
          borderRadius: "14px",
          overflow: "hidden",
          background: "#f3f4f6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "14px",
        }}
      >
        {status === "loading" && (
          <p style={{ color: "#999", fontSize: "13px" }}>
            Fetching a good boy...
          </p>
        )}
        {status === "error" && (
          <p style={{ color: "#dc2626", fontSize: "13px" }}>
            Couldn't fetch an image.
          </p>
        )}
        {status === "success" && imageUrl && (
          <img
            src={imageUrl}
            alt="Random dog"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
      </div>

      <button
        onClick={fetchDog}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "10px",
          border: "none",
          background: "#111",
          color: "#fff",
          fontWeight: 600,
          fontSize: "13px",
          cursor: "pointer",
        }}
      >
        🐶 Another dog
      </button>
    </div>
  );
}
