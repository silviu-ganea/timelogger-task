import '../styling/customStyle.css';
import * as React from 'react';
import Projects from './views/Projects';
import './tailwind.generated.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AddProject from './views/AddProject'
import AddTime from './views/AddTime'
import ButtonAdd from './components/ButtonAdd';
import { ProjectProvider } from './context';
import ProjectDetail from './views/ProjectDetail';

export default function App() {
    const axios = require('axios').default;
    axios.defaults.baseURL = 'http://localhost:3001/api/';
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
                    <div className="flex ">
                        <div className="navigation " >
                            <ButtonAdd urlTo={"/"} btnText = {"Projects"} /> 
                            <ButtonAdd urlTo={"/addTime"} btnText = {"Add Time"} /> 
                            <ButtonAdd urlTo={"/addProject"} btnText = {"Add Project"} /> 
                        </div>
                    </div>
                        <Switch>
                            <Route path="/" exact  component={Projects} />
                            <Route path="/addTime" component={AddTime} />
                            <Route path="/addProject" component={AddProject} />
                            <Route path="/projectDetail/:projectId" component={ProjectDetail} />
                        </Switch>
                    </Router>
                </ProjectProvider>                       
                </div>
            </main>
        </>
    );
}
