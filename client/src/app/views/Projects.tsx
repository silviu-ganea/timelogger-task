import React, {Component} from 'react';
import Table from '../components/Table';
import { useProjectContext } from '../context';
import { IProject } from '../interfaces/IProject';

export default function Projects() {
	return (
		<>
			<Table/>
		</>
	);
}