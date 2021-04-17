import React from 'react'
import {IProject} from "../interfaces/IProject"

export default function FormInput(props : {name : string}) {
    return (
        <>
            <label htmlFor={props.name} className="block text-xs font-semibold text-gray-600 uppercase">{props.name}</label>
            <input id={props.name} type="text" name={props.name} className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
        </>
    )
}
