import * as React from 'react';
import Projects from './views/Projects';
import './tailwind.generated.css';
import { IProject } from './interfaces/IProject';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import AddProject from './views/AddProject'
import AddTime from './views/AddTime'
import ButtonAdd from './components/ButtonAdd';
import { ProjectProvider } from './context';

export default function App() {
    const [projects , setProjects] = React.useState<IProject[]>(
        [
            {
                id : 1,
                name : "project1",
                totalHours : 25,
                deadline : "maine",
                timeEntries : []  
            },
            {
                id : 2,
                name : "project2",
                totalHours : 32,
                deadline : "poimaine",
                timeEntries : []  
            }
        ]
    );
    return (
        <>
            <header className="bg-gray-900 text-white flex items-center h-12 w-full">
                <div className="container mx-auto">
                   <a className="navbar-brand" href="/">Timelogger</a>
                </div>
            </header>
            
            <main>
                <div className="container mx-auto">
                <ProjectProvider>    
                    <Router>
                    <div className="flex items-center my-6">
                        <div className="inline-flex space-x-4" >
                            <ButtonAdd urlTo={"/"} btnText = {"Projects"} /> 
                            <ButtonAdd urlTo={"/addTime"} btnText = {"Add Time"} /> 
                            <ButtonAdd urlTo={"/addProject"} btnText = {"Add Project"} /> 
                        </div>
                    </div>
                        
                        <Switch>
                            <Route path="/" exact  component={Projects} />
                            <Route path="/addTime" component={AddTime} />
                            <Route path="/addProject" component={AddProject} />
                        </Switch>
                    </Router>
                </ProjectProvider>                       
                </div>
            </main>
        </>
    );
}
