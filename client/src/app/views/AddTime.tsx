import React from 'react'
import FormInput from '../components/FormInput'
import { useProjectContext } from '../context';

const AddTime = () => {
    const {newTimeEntry,setNewTimeEntry, createTimeEntry} = useProjectContext();

    const formSubmitHandler = (e) =>{
        e.preventDefault();
        console.log(newTimeEntry);
        createTimeEntry();
    };
    return (
        <div className="grid min-h-screen place-items-center">
            <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
                <h1 className="text-xl font-semibold">Add a time entry</h1>
                <form className="mt-6" onSubmit={formSubmitHandler}>
                    <label htmlFor="timeEntryProjectId" className="block text-xs font-semibold text-gray-600 uppercase">project id</label>
                    <input id="timeEntryProjectId" type="number" value={newTimeEntry.projectId || ''} onChange={e => setNewTimeEntry({...newTimeEntry, projectId: e.target.valueAsNumber })} name="timeEntryProjectId" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                    <label htmlFor="dateAdded" className="block text-xs font-semibold text-gray-600 uppercase">date added</label>
                    <input id="dateAdded" type="date" value={newTimeEntry.dateAdded || ''} onChange={e => setNewTimeEntry({...newTimeEntry, dateAdded: e.target.value })} name="dateAdded" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                    <label htmlFor="hours" className="block text-xs font-semibold text-gray-600 uppercase">hours</label>
                    <input id="hours" type="number" value={newTimeEntry.hours || ''} onChange={e => setNewTimeEntry({...newTimeEntry, hours: e.target.valueAsNumber })} name="hours" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                    <label htmlFor="description" className="block text-xs font-semibold text-gray-600 uppercase">description</label>
                    <input id="description" type="text" value={newTimeEntry.description || ''} onChange={e => setNewTimeEntry({...newTimeEntry, description: e.target.value })} name="description" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                    <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">Add time</button>
                </form>
            </div>
        </div>
    )
}

export default AddTime
