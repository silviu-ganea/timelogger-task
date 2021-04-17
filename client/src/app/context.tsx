import * as React from "react"
import {IProject} from "./interfaces/IProject"
import { ITimeEntry } from "./interfaces/ITimeEntry";

const addProject = (projects: IProject[], name : string, totalHours: number, deadline : string, timeEntries : ITimeEntry[]): IProject[] => [
    ...projects,
    {
      id: Math.max(0, Math.max(...projects.map(({ id }) => id))) + 1,
      name,
      totalHours,
      deadline,
      timeEntries
    },
];

const useProjects = (initial: IProject[] = []) => {
    const [projects, setProjects] = React.useState<IProject[]>(initial);
    const [newProjectName, setNewProjectName] = React.useState<string>("");
    const [newProjectTotalHours, setNewProjecTotalHours] = React.useState<number>(0);
    const [newProjectDeadline, setNewProjectDeadline] = React.useState<string>("");
    const [newProjectTimeEntries, setNewProjectTimeEntries] = React.useState<ITimeEntry[]>();

    return {
        projects,
        newProjectName,
        newProjectTotalHours,
        newProjectDeadline,
        newProjectTimeEntries,
        setNewProjectName,
        setNewProjecTotalHours,
        setNewProjectDeadline,
        setNewProjectTimeEntries,
        addProject: React.useCallback(() => {
            console.log(projects);
            console.log(newProjectName);
            console.log(newProjectTotalHours);
            console.log(newProjectDeadline);
            console.log(newProjectTimeEntries);
            setProjects((projList) => addProject(projList, newProjectName, newProjectTotalHours, newProjectDeadline, newProjectTimeEntries ?? []));
        }, [newProjectName, newProjectTotalHours, newProjectDeadline, newProjectTimeEntries]),
    };
  };
  
  const ProjectContext = React.createContext<ReturnType<typeof useProjects> | null>(null);
  
  export const useProjectContext = () => React.useContext(ProjectContext)!;
  
  export function ProjectProvider({ children }: { children: React.ReactNode }) {
    return (
      <ProjectContext.Provider value={useProjects([])}>{children}</ProjectContext.Provider>
    );
  }