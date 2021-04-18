import React, {useEffect} from "react"
import {IProject} from "./interfaces/IProject"
import { ITimeEntry } from "./interfaces/ITimeEntry";

const useProjects = (initial: IProject[] = []) => {
  const [projects, setProjects] = React.useState<IProject[]>(initial);
  const [newProject, setNewProject] = React.useState<Partial<IProject>>({});
  const [newTimeEntry, setNewTimeEntry] = React.useState<Partial<ITimeEntry>>({});

  const fetchProjects = () =>{
    const axios = require('axios').default;
    axios.get('/projects')
    .then(function (response) {
      setProjects(response.data);
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  };
  const createProject = () =>{
    const axios = require('axios').default;
    axios.post('/projects', {
      name: newProject.name,
      totalHours: 0,
      deadline: newProject.deadline
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  };
  const createTimeEntry = () =>{
    const axios = require('axios').default;
    axios.post('/timeentries', {
      projectId: newTimeEntry.projectId,
      dateAdded: newTimeEntry.dateAdded,
      hours: newTimeEntry.hours,
      description: newTimeEntry.description
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  };
  return {
      projects,
      newProject,
      newTimeEntry,
      setNewTimeEntry,
      setProjects,
      createProject,
      createTimeEntry,
      setNewProject,
      fetchProjects,
      addProject: React.useCallback(() => {
          setProjects((projList) => addProject(projList, newProject! as IProject));
      }, [newProject]),
  };
};

const addProject = (projects: IProject[], project : IProject): IProject[] => [
  ...projects,
  {
    id: Math.max(0, Math.max(...projects.map(({ id }) => id))) + 1,
    name: project.name,
    totalHours: project.totalHours,
    deadline: project.deadline,
    timeEntries: project.timeEntries
  }
];
  
const ProjectContext = React.createContext<ReturnType<typeof useProjects> | null>(null);
  
export const useProjectContext = () => React.useContext(ProjectContext)!;
  
export function ProjectProvider({ children }: { children: React.ReactNode }) {
  return (
    <ProjectContext.Provider value={useProjects([])}>{children}</ProjectContext.Provider>
  );
}

