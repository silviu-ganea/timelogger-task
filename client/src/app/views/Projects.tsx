import React ,{useEffect} from 'react';
import { useProjectContext } from '../context';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import ProjectDetail from '../views/ProjectDetail';

export default function Projects() {
	const {projects, fetchProjects} = useProjectContext();
	useEffect(() => {
		fetchProjects();
	}, [])
	return (
		<Router>
			<Switch>
				<Route path="/" exact  component={Projects}>
					<table className="table-fixed w-full">
						<thead className="bg-gray-200">
							<tr>
								<th className="border px-4 py-2 w-12">#</th>
								<th className="border px-4 py-2">Project Name</th>
								<th className="border px-4 py-2">TotalHours</th>
								<th className="border px-4 py-2">Deadline</th>
							</tr>
						</thead>
						<tbody>
							{projects.map((project) => 
								<tr key = {project.id}>
									<td className="border px-4 py-2">{project.id}</td>
									<td className="border px-4 py-2"><Link to={`/projectdetail/${project.id}`}>{project.name}</Link></td>
									<td className="border px-4 py-2">{project.totalHours}</td>
									<td className="border px-4 py-2">{project.deadline}</td>
								</tr>
							)}
						</tbody>
					</table>
				</Route>	
				<Route path="/projectdetail/:projectId" exact component={ProjectDetail}/>
			</Switch>
			
		</Router>
	);
}