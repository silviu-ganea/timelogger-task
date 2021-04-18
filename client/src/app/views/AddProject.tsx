import React from 'react'
import { useProjectContext } from '../context';

function AddProject() {
    const {newProject,setNewProject, addProject, createProject} = useProjectContext();

    const formSubmitHandler = (e) =>{
        e.preventDefault();
        console.log(newProject);
        createProject();
    };
    //TODO : use FormInput component, pass the onchange as prop
    return (
        <div className="grid min-h-screen place-items-center">
            <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
                <h1 className="text-xl font-semibold">Add a time entry</h1>
                <form className="mt-6" onSubmit={formSubmitHandler}>
                    <label htmlFor="projectName" className="block text-xs font-semibold text-gray-600 uppercase">Project Name</label>
                    <input id="projectName" type="text" value={newProject.name || ''} onChange={e => setNewProject({...newProject, name: e.target.value })} name="projectName" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                    <label htmlFor="totalHours" className="block text-xs font-semibold text-gray-600 uppercase">total Hours</label>
                    <input id="totalHours" type="number" value={newProject.totalHours || ''} onChange={e => setNewProject({...newProject, totalHours: e.target.valueAsNumber })} name="totalHours" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                    <label htmlFor="deadline" className="block text-xs font-semibold text-gray-600 uppercase">deadline</label>
                    <input id="deadline" type="text" value={newProject.deadline || ''} onChange={e => setNewProject({...newProject, deadline: e.target.value })} name="deadline" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                    <button type="submit"  className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">Add Project</button>
                </form>
            </div>
        </div>
    )
}

export default AddProject
