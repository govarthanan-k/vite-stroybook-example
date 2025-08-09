export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      data-testid="button"
      style={{
        backgroundColor: "blue",
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
