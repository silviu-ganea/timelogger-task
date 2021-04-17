import React from 'react';
import { IProject } from '../interfaces/IProject';
import { useProjectContext } from '../context';

export default function Table() {
	const {projects} = useProjectContext();
	return (
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
						<td className="border px-4 py-2">{project.name}</td>
						<td className="border px-4 py-2">{project.totalHours}</td>
						<td className="border px-4 py-2">{project.deadline}</td>
					</tr>
				)}	
			</tbody>
		</table>
	);
}