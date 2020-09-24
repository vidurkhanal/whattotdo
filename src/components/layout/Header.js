import React from "react";
import { BsFillBellFill } from "react-icons/bs";

export const Header = () => {
  return (
    <header data-testid="header">
      <nav>
        <div className="logo">
          <img src="" alt="What To Do." />
        </div>
        <ul>
          <li>+</li>
          <li>
            <BsFillBellFill />
          </li>
        </ul>
      </nav>
    </header>
  );
};
