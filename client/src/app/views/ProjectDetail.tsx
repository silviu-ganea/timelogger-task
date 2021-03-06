import React, {useEffect} from 'react'
import { IProject } from '../interfaces/IProject';

function ProjectDetail ({match}){
    const [project, setProject] = React.useState<IProject>();
    const fetchTimeEntries = () =>{
        const axios = require('axios').default;
        axios.get(`/projects/${match.params.projectId}`)
        .then(function (response) {
          setProject(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    };
    useEffect(() => {
		  fetchTimeEntries();
  	}, [])
    return (
      <>
      <h1>Time logged for : {project?.name}</h1>
      <table className="table-fixed w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2 w-12">#</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Hours</th>
            <th className="border px-4 py-2">Date added</th>
          </tr>
        </thead>
        <tbody>
          {project?.timeEntries.map((timeEntry) => 
            <tr key = {timeEntry.id}>
                <td className="border px-4 py-2">{timeEntry.id}</td>
                <td className="border px-4 py-2">{timeEntry.description}</td>
                <td className="border px-4 py-2">{timeEntry.hours}</td>
                <td className="border px-4 py-2">{timeEntry.dateAdded}</td>
            </tr> 
          )}
        </tbody>
		  </table>
      </>
    )
}
export default ProjectDetail;
