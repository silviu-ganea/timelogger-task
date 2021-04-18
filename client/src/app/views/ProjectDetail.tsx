import React, {useEffect} from 'react'
import { IProject } from '../interfaces/IProject';

function ProjectDetail ({match}){
    const [project, setProject] = React.useState<IProject>();
    const fetchTimeEntries = () =>{
        const axios = require('axios').default;
        console.log(match);
        axios.get(`/projects/${match.params.projectId}`)
        .then(function (response) {
          setProject(response.data);
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
    useEffect(() => {
		  fetchTimeEntries();
  	}, [])
    return (
      <table className="table-fixed w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2 w-12">#</th>
            <th className="border px-4 py-2">description</th>
            <th className="border px-4 py-2">hours</th>
            <th className="border px-4 py-2">date added</th>
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
    )
}
export default ProjectDetail;
