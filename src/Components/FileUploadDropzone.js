import { useState, useRef } from "react";

export default function FileUploadDropzone() {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [files, setFiles] = useState([]);
  const inputRef = useRef(null);

  function addFiles(fileList) {
    const newFiles = Array.from(fileList).map((file) => ({
      name: file.name,
      sizeKB: Math.round(file.size / 1024),
    }));
    setFiles((current) => [...current, ...newFiles]);
  }

  function handleDrop(e) {
    e.preventDefault();
    setIsDraggingOver(false);
    addFiles(e.dataTransfer.files);
  }

  function removeFile(index) {
    setFiles((current) => current.filter((_, i) => i !== index));
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
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDraggingOver(true);
        }}
        onDragLeave={() => setIsDraggingOver(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current.click()}
        style={{
          border: "2px dashed " + (isDraggingOver ? "#111" : "#ddd"),
          borderRadius: "16px",
          padding: "40px 20px",
          textAlign: "center",
          cursor: "pointer",
          background: isDraggingOver ? "#f9fafb" : "#fff",
          transition: "all .15s ease",
        }}
      >
        <p style={{ margin: "0 0 4px", fontWeight: 600, fontSize: "14px" }}>
          {isDraggingOver
            ? "Drop files here"
            : "Drag files here, or click to browse"}
        </p>
        <p style={{ margin: 0, fontSize: "12px", color: "#999" }}>
          Any file type, for demo purposes only
        </p>

        <input
          ref={inputRef}
          type="file"
          multiple
          onChange={(e) => addFiles(e.target.files)}
          style={{ display: "none" }}
        />
      </div>

      {files.length > 0 && (
        <div
          style={{
            marginTop: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {files.map((file, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 12px",
                borderRadius: "8px",
                background: "#f9fafb",
                fontSize: "13px",
              }}
            >
              <span>
                {file.name}{" "}
                <span style={{ color: "#999" }}>({file.sizeKB} KB)</span>
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(index);
                }}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#999",
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
