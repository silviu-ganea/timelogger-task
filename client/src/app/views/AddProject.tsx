import React from 'react'
import { useProjectContext } from '../context';

function AddProject() {
    const {newProjectName, newProjectTotalHours, newProjectDeadline, setNewProjectName, setNewProjecTotalHours, setNewProjectDeadline, addProject} = useProjectContext();
    return (
        <div className="grid min-h-screen place-items-center">
            <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
                <h1 className="text-xl font-semibold">Add a time entry</h1>
                <form className="mt-6" onSubmit={e => e.preventDefault()}>
                    <label htmlFor="projectName" className="block text-xs font-semibold text-gray-600 uppercase">Project Name</label>
                    <input id="projectName" type="text" name="projectName" value={newProjectName} onChange={(evt) => setNewProjectName(evt.target.value)} className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                    <label htmlFor="totalHours" className="block text-xs font-semibold text-gray-600 uppercase">total Hours</label>
                    <input id="totalHours" type="number" name="totalHours" value={newProjectTotalHours} onChange={(evt) => setNewProjecTotalHours(evt.target.valueAsNumber)} className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                    <label htmlFor="deadline" className="block text-xs font-semibold text-gray-600 uppercase">deadline</label>
                    <input id="deadline" type="text" name="deadline" value={newProjectDeadline} onChange={(evt) => setNewProjectDeadline(evt.target.value)} className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                    {/* <FormInput name = {"project name"} setNew = {setNewProjectName}/>
                    <FormInput name = {"total Hours"}/>
                    <FormInput name = {"deadline"}/> */}
                    <button type="submit" onClick={() => addProject()} className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">Add Project</button>
                </form>
            </div>
        </div>
    )
}

export default AddProject
