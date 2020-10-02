import React, { createContext, useContext, useState } from "react";
import { useProjects } from "../hooks";

export const ProjectsContext = createContext();
export const ProjectsProvider = ({ children }) => {
  const { projects, setProjects } = useProjects();
  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};
export const useProjectsValue = useContext(ProjectsContext);

// SELECTED PROJECT CONTEXT
export const SelectedProjectContext = createContext();
export const SelectedProjectProvider = ({ children }) => {
  const { selectedProject, setSelectedProject } = useState("INBOX");
  return (
    <SelectedProjectContext.Provider
      value={{ selectedProject, setSelectedProject }}
    >
      {children}
    </SelectedProjectContext.Provider>
  );
};
export const useSelectedProject = useContext(SelectedProjectContext);
