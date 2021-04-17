import * as React from "react"
import {IProject} from "./interfaces/IProject"

const useProjects = (initial: IProject[] = []) => {
    const [projects, setProjects] = React.useState<IProject[]>(initial);
    const [newProject, setNewProject] = React.useState<Partial<IProject>>({});

    return {
        projects,
        newProject,
        setNewProject,
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