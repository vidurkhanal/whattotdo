import React from 'react';
import ReactDOM from "react-dom";
import { App } from './App';
import { ProjectsProvider, SelectedProjectProvider } from "./context";

ReactDOM.render(
  <SelectedProjectProvider>
      <ProjectsProvider>
        <App />
      </ProjectsProvider>
  </SelectedProjectProvider>,
  document.getElementById("root")
);

