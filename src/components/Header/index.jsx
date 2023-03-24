import * as React from "react";
import "./styles.scss";
import { Logo } from "../Branding/Logo/index.jsx";
import { BrandLinkedin, BrandGithub } from "tabler-icons-react";

export function Header({}) {
  return (
    <div className={"header-wrapper"}>
      <nav className={"header-content"}>
        <div className={"logo"}>
          <a href={"/"}>
            <Logo className={""} type="image" size={"small"} />
          </a>
        </div>
        <div className={"social"}>
          <a href={"https://www.linkedin.com/in/bl-kt/"} target="_blank">
            <BrandLinkedin size={40} color={"white"} strokeWidth={"1"} />
          </a>
          <a href={"https://github.com/bl-kt"} target="_blank">
            <BrandGithub size={40} color={"white"} strokeWidth={"1"} />
          </a>
        </div>
      </nav>
    </div>
  );
}
