export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      style={{
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        padding: "10px 16px",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px",
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
