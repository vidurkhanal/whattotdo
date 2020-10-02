import React, { useState } from "react";
import {
  BsInboxFill,
  BsCalendar,
  BsCalendarFill,
  BsChevronCompactDown,
} from "react-icons/bs";
import {useSelectedProject} from '../../context/index'

export const Sidebar = () => {
  const {setSelectedProject} = useSelectedProject()
  const [active,setActive] = useState('inbox')
  const [showProject,setShowProject]= useState(true)
  return (
    <div className="sidebar" data-testid="sidebar">
      {/* Generic */}
      <ul className="sidebar__generic">
        <li className="inbox" data-testid="inbox">
          <div>
          <span>
            <BsInboxFill />
          </span>{" "}
          <span>Inbox</span>{" "}
          </div>
          
        </li>
        <li className="today" data-testid="today">
          <div>
          <span>
            <BsCalendar />
          </span>{" "}
          <span>Today</span>{" "}
          </div>
        </li>
        <li className="next_7" data-testid="next_7">
          <div>
          <span>
            <BsCalendarFill />
          </span>{" "}
          <span>Next 7 Days</span>{" "}
          </div>
        </li>
      </ul>
      {/* MIDDLE */}
      <div className="sidebar__middle">
        <span>
          <BsChevronCompactDown />
        </span>
        <h2>Projects</h2>
      </div>
      {/* Projects */}
      <ul className="sidebar__projects">PROJECTS WILL BE HERE</ul>
      [ADD PROJECT COMPONENT OVER HERE.]
    </div>
  );
};
