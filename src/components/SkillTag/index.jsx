import * as React from "react";
import "./styles.scss";

export function SkillTag({ icon, text, size = "medium" }) {
  return (
    <div id={`tag-${text}`} className={`tag ` + `tag-` + size}>
      {icon}
      {text}
    </div>
  );
}
