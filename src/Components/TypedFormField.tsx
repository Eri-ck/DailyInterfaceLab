import { useState, ChangeEvent } from "react";

// Primer componente TIPADO del lab. TypeScript y @types/react ya estaban
// en package.json desde el día 1 pero nunca se habían usado — este es el
// punto de partida para adoptarlo gradualmente, componente por componente,
// sin migrar (ni romper) los 86 componentes en .js que ya existen.
// Coexisten .js y .tsx en la misma carpeta sin problema.

type FieldType = "text" | "email" | "password";

interface TypedFormFieldProps {
  label: string;
  type?: FieldType;
  required?: boolean;
  helperText?: string;
}

export default function TypedFormField({
  label,
  type = "text",
  required = false,
  helperText,
}: TypedFormFieldProps) {
  const [value, setValue] = useState<string>("");
  const [touched, setTouched] = useState(false);

  const isEmpty = required && touched && value.trim() === "";

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <div style={{ maxWidth: "320px" }}>
      <label
        style={{
          display: "block",
          fontSize: "13px",
          fontWeight: 600,
          marginBottom: "6px",
        }}
      >
        {label} {required && <span style={{ color: "#e11" }}>*</span>}
      </label>

      <input
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={() => setTouched(true)}
        aria-invalid={isEmpty}
        aria-describedby={helperText ? "typed-field-helper" : undefined}
        style={{
          width: "100%",
          padding: "10px 12px",
          borderRadius: "8px",
          border: `1px solid ${isEmpty ? "#e11" : "#ddd"}`,
          fontSize: "14px",
          boxSizing: "border-box",
        }}
      />

      {helperText && (
        <p
          id="typed-field-helper"
          style={{
            fontSize: "12px",
            color: isEmpty ? "#e11" : "#888",
            margin: "6px 0 0",
          }}
        >
          {isEmpty ? "Este campo es obligatorio." : helperText}
        </p>
      )}
    </div>
  );
}
