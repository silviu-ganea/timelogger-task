import React from 'react'
import {Link} from 'react-router-dom'

export default function ButtonAdd(params :{urlTo: string, btnText: string}) {
    return (
        <div className="flex-1">
            <Link to={params.urlTo} className="@apply py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75;">{params.btnText}</Link>
        </div>
    )
}
