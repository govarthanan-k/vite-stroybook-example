import React from "react";

export interface CardProps {
  title: string;
  description?: string;
}

export const Card: React.FC<CardProps> = ({ title, description }) => {
  const rootStyle: React.CSSProperties = {
    width: 320,
    borderRadius: 12,
    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
    overflow: "hidden",
    background: "#fff",
    fontFamily:
      "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    color: "#111",
  };

  const contentStyle: React.CSSProperties = {
    padding: 16,
  };

  const titleStyle: React.CSSProperties = {
    margin: 0,
    fontSize: 18,
    lineHeight: 1.2,
    fontWeight: 600,
  };

  const descStyle: React.CSSProperties = {
    marginTop: 8,
    marginBottom: 12,
    fontSize: 14,
    color: "#444",
    lineHeight: 1.4,
  };

  return (
    <article role="group" aria-label={title} style={rootStyle}>
      <div style={contentStyle}>
        <h3 style={titleStyle}>{title}</h3>
        {description && <p style={descStyle}>{description}</p>}
      </div>
    </article>
  );
};

export default Card;
