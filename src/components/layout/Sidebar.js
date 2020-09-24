import React from "react";
import {
  BsInboxFill,
  BsCalendar,
  BsCalendarFill,
  BsChevronCompactDown,
} from "react-icons/bs";

export const Sidebar = () => {
  return (
    <div className="sidebar" data-testid="sidebar">
      {/* Generic */}
      <ul className="sidebar__generic">
        <li>
          <span>
            <BsInboxFill />
          </span>{" "}
          <span>Inbox</span>{" "}
        </li>
        <li>
          <span>
            <BsCalendar />
          </span>{" "}
          <span>Today</span>{" "}
        </li>
        <li>
          <span>
            <BsCalendarFill />
          </span>{" "}
          <span>Next 7 Days</span>{" "}
        </li>
      </ul>
      {/* MIDDLE */}
      <div className="sidebar__middle">
        <span>
          <BsChevronCompactDown />
        </span>
        <h3>Projects</h3>
      </div>
      {/* Projects */}
      <ul className="sidebar__projects">PROJECTS WILL BE HERE</ul>
      [ADD PROJECT COMPONENT OVER HERE.]
    </div>
  );
};
