import * as React from "react";
import "./styles.scss";
import { Link } from "tabler-icons-react";

export function PortfolioItem({ img, title, text, link, direction, skills }) {
  return (
    <div
      className={
        (direction === "left" ? "left" : "right") + " portfolio-item-wrapper"
      }
    >
      <div className={"image"}>{img}</div>
      <div className={"portfolio-item-content"}>
        {link && (
          <a className={"title-with-link"} href={link}>
            <h3> {title} </h3>
            <Link size={20} />
          </a>
        )}
        {!link && <h3> {title} </h3>}
        <p> {text} </p>
        <div className={"portfolio-item-skills"}>{skills}</div>
      </div>
    </div>
  );
}
