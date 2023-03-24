import * as React from "react";
import "./styles.scss";

export function Logo({ type, size, className, onClick }) {
  return (
    <div className={className} onClick={onClick}>
      <img
        className={`${size}`}
        alt="BLKT Logo"
        src={`src/assets/logo/${type}.png`}
      />
    </div>
  );
}
