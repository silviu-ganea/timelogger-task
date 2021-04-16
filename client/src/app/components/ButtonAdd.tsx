import React from 'react'
import {BrowserRouter, Link} from 'react-router-dom'

export default function ButtonAdd(params :{urlTo: string, btnText: string}) {
    return (
        <div>
            <Link to={params.urlTo} className="@apply py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 margin-left:10px;">{params.btnText}</Link>
        </div>
    )
}
