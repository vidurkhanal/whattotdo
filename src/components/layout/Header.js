import React from "react";
import {  BsMoon } from "react-icons/bs";

export const Header = () => {
  return (
    <header data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo1.png" alt="What To Do." />
        </div>
        <div className="settings">
                <ul>
              <li  className="settings__add"                 data-testid="quick-add-task-action">+</li>
                  <li className="settings__darkmode"                 data-testid="dark-mode-action">
                    <BsMoon size="large"/>
                  </li>
                </ul>
        </div>
      </nav>
    </header>
  );
};
