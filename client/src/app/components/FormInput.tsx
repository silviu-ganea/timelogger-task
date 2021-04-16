import React from 'react'

export default function FormInput(param : {name : string}) {
    return (
        <>
            <label htmlFor={param.name} className="block text-xs font-semibold text-gray-600 uppercase">{param.name}</label>
            <input id={param.name} type="text" name={param.name} className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
        </>
    )
}
