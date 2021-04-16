import React, {Component} from 'react';
import Table from '../components/Table';
import { IProject } from '../interfaces/IProject';

export default function Projects({projects} : {projects : IProject[]}) {
	return (
		<>
			<Table projects = {projects} />
		</>
	);
}