import React from 'react'
import FormInput from '../components/FormInput'

const AddTime = () => {
    return (
        <div className="grid min-h-screen place-items-center">
            <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
                <h1 className="text-xl font-semibold">Add a time entry</h1>
                <form className="mt-6">
                    <FormInput name = {"id"}/>
                    <FormInput name = {"date Added"}/>
                    <FormInput name = {"hours"}/>
                    <FormInput name = {"description"}/>
                    <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">Add time</button>
                </form>
            </div>
        </div>
    )
}

export default AddTime
